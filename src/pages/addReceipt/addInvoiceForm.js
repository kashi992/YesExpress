import React, { useState, useEffect, useRef, useContext } from 'react'
import CustomInput from '../../components/customInput/customInput'
import Button from '../../components/buttons/button'
import LinkButton from '../../components/buttons/linkButton';
import { addInvoice, addProducts, uploadProductImage, addProductImage, generatePDFInvoice } from '../../services/api/invoiceApi';
import CustomSelect from '../../components/customSelect/customSelect'
import Loader from '../../components/loader';
import SignaturePad from 'react-signature-canvas';
import './index.scss'
import styles from './SignaturePad.module.css';
import AuthContext from '../../services/context/AuthProvider';
import StatusTree from '../../components/statusTree/formStatus';

const AddInvoiceForm = () => {
    const [deliveryType, setDeliveryType] = useState('selected-value');
    const [codEnabled, setCodEnabled] = useState(false);
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { auth } = useContext(AuthContext);
    const currentUserId = 'wb-u-' + auth.userId;
    let invoiceID = '';
    const [formStep, setFormStep] = useState(1)
    const [destination, setDestination] = useState('')
    const [invoiceType, setInvoiceType] = useState('')
    const [editProductIndex, setEditProductIndex] = useState()

    const sigPad = useRef(null);
    const [signatureImage, setSignatureImage] = useState('');

    const clearSignature = () => {
        sigPad.current.clear();
        setSignatureImage('');
    };

    const saveSignature = () => {
        if (sigPad.current) {
            const image = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
            const base64Index = image.indexOf('base64,') + 7;
            if (base64Index > 6) {
                setSignatureImage(image.substring(base64Index));
            } else {
                setSignatureImage('No Base64 data found.');
            }
            // setSignatureImage(image);
            // console.log("Base64 Encoded Image:", signatureImage);
        }
    };

    const deliveryTypeOptions = [
        { value: '', label: 'Delivery Type' },
        { value: 'Dropoff', label: 'Drop-off' },
        { value: 'Collection', label: 'Collection' }
    ];
    const [senderFormData, setSenderFormData] = useState(() => {
        const savedData = localStorage.getItem('senderFormData');
        return savedData ? JSON.parse(savedData) : {
            name: '',
            address: '',
            district: '',
            city: '',
            state: '',
            postcode: '',
            phone1: '',
            phone2: '',
            email: ''
        };
    });
    const [receiverFormData, setReceiverFormData] = useState(() => {
        const savedData = localStorage.getItem('receiverFormData');
        return savedData ? JSON.parse(savedData) : {
            name: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            postcode: '',
            phone1: '',
            phone2: '',
            email: ''
        };
    });
    const [productFormData, setProductFormData] = useState({
        productDescription: '',
        goodsValue: '',
        boxWeight: '',
        length: '',
        width: '',
        height: ''
    });
    const [deliveryFormData, setDeliveryFormData] = useState(() => {
        const savedData = localStorage.getItem('deliveryFormData');
        return savedData ? JSON.parse(savedData) : {
            additionalCost: 0,
            comments: ''
        };
    });

    useState(() => {
        const savedDeliveryType = localStorage.getItem('deliveryType');
        setDeliveryType(savedDeliveryType ? savedDeliveryType : '')
    });

    const handleSenderFormChange = (event) => {
        const { name, value } = event.target;
        setSenderFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleReceiverFormChange = (event) => {
        const { name, value } = event.target;
        setReceiverFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleDeliveryTypeChange = (event) => {
        if (event.target.value === 'Dropoff') {
            localStorage.removeItem('deliveryFormData');
        }
        setDeliveryType(event.target.value);
        localStorage.setItem('deliveryType', event.target.value)
    };
    const handleDeliveryFormChange = (event) => {
        const { name, value } = event.target;
        setDeliveryFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const saveData = (step) => {
        localStorage.setItem('senderFormData', JSON.stringify(senderFormData));
        localStorage.setItem('receiverFormData', JSON.stringify(receiverFormData));
        localStorage.setItem('productFormData', JSON.stringify(productFormData));
        localStorage.setItem('deliveryFormData', JSON.stringify(deliveryFormData));
        // console.log('Data Saved')
        setFormStep(step)
    };

    // useEffect(() => {
    //     const data = localStorage.getItem('senderFormData');
    //     if (data) {
    //         setSenderFormData(JSON.parse(data));
    //     }
    // }, []);

    // const [productImages, setProductImages] = useState(() => {
    //     const savedImages = localStorage.getItem('productImages');
    //     return savedImages ? JSON.parse(savedImages) : [];
    // });
    const [productImages, setProductImages] = useState([]);

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const addImageFile = () => {
        const fileReader = new FileReader();
        const file = document.querySelector('#product-img-file').files[0];
        if (file) {
            setUploadedFiles(prevFiles => [...prevFiles, file]);
            fileReader.onload = (e) => {
                const newImage = {
                    src: e.target.result, // This is the Base64 string
                    name: file.name
                };
                const updatedImages = [...productImages, newImage];
                setProductImages(updatedImages);
                // localStorage.setItem('productImages', JSON.stringify(updatedImages));
            };

            fileReader.readAsDataURL(file);
        }

    };
    const removeProductImage = (index) => {
        const updatedImages = productImages.filter((_, i) => i !== index);
        setProductImages(updatedImages);
        localStorage.setItem('productImages', JSON.stringify(updatedImages));
    };
    // useEffect(() => {
    //     const storedFiles = localStorage.getItem('uploadedFiles');
    //     if (storedFiles) {
    //       setUploadedFiles(JSON.parse(storedFiles));
    //     }
    // }, []);
    // useEffect(() => {
    //     if(uploadedFiles.length){
    //         localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
    //     }
    // }, [uploadedFiles]);

    // useEffect(() => {
    //     const storedProducts = localStorage.getItem('products');
    //     if (storedProducts) {
    //       setProducts(JSON.parse(storedProducts));
    //     }
    // }, []);
    // useEffect(() => {
    //     if(products.length){
    //         localStorage.setItem('products', JSON.stringify(products));
    //     }
    // }, [products]);

    const handleAddProduct = () => {
        if (productFormData) {
            setProducts([...products, productFormData]);
            setProductFormData({
                productDescription: '',
                goodsValue: '',
                boxWeight: '',
                length: '',
                width: '',
                height: ''
            });
            // localStorage.setItem('products', JSON.stringify(products));
            addImageFile();
        }
    };
    const handleEditProduct = (index) => {
        setEditProductIndex(index)
        setProductFormData({
            productDescription: products[index].productDescription,
            goodsValue: products[index].goodsValue,
            boxWeight: products[index].boxWeight,
            length: products[index].length,
            width: products[index].width,
            height: products[index].height
        });
        
    };
    const saveEditedProduct = (index) =>{
        const updatedProducts = [...products];
        updatedProducts[index] = { ...updatedProducts[index], ...productFormData };
        setProducts(updatedProducts);
        setProductFormData({
            productDescription: '',
            goodsValue: '',
            boxWeight: '',
            length: '',
            width: '',
            height: ''
        });
        setEditProductIndex(-1)
    }
    const handleRemoveProduct = (index) => {
        if (productFormData) {
            setProducts(products.filter((_, i) => i !== index));
        }
    };
    const handleProductFormChange = (event) => {
        const { name, value } = event.target;
        setProductFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    useEffect(() => {
        setInvoiceType(destination === 'paktoaus' ? "PakInvoice" : "AusInvoice")
    }, [destination])

    const generateInvoice = async (e) => {
        e.preventDefault();
        if (products.length && invoiceType) {
            let invoicePayload = {}
            if (invoiceType === 'PakInvoice') {
                invoicePayload = {
                    invoiceType: invoiceType,
                    city: "lahore",
                    country: "pakistan",
                    userId: currentUserId,
                    data: {
                        sender_name: senderFormData.name,
                        sender_address: senderFormData.address,
                        sender_postcode: senderFormData.postcode,
                        sender_district: senderFormData.district,
                        sender_city: senderFormData.city,
                        sender_phone1: senderFormData.phone1,
                        sender_phone2: senderFormData.phone2,
                        sender_email: senderFormData.email,
                        receiver_name: receiverFormData.name,
                        receiver_address: receiverFormData.address1,
                        receiver_postcode: receiverFormData.postcode,
                        receiver_phone1: receiverFormData.phone1,
                        receiver_phone2: receiverFormData.phone2,
                        receiver_email: receiverFormData.email
                    }
                };
            }
            else {
                invoicePayload = {
                    invoiceType: invoiceType,
                    city:"perth",
                    country:"australia", 
                    userId: currentUserId,
                    data: {
                        sender_name: senderFormData.name,
                        sender_address: senderFormData.address,
                        sender_postcode: senderFormData.postcode,
                        sender_phone1: senderFormData.phone1,
                        sender_phone2: senderFormData.phone2,
                        sender_email: senderFormData.email,
                        receiver_name: receiverFormData.name,
                        receiver_address: receiverFormData.address1,
                        receiver_postcode: receiverFormData.postcode,
                        receiver_district: receiverFormData.state,
                        receiver_city: receiverFormData.city,
                        receiver_phone1: receiverFormData.phone1,
                        receiver_phone2: receiverFormData.phone2,
                        receiver_email: receiverFormData.email
                    }
                }
            }

            setLoading(true)
            try {
                const response = await addInvoice([invoicePayload]);
                const isSuccess = response?.data?.status;
                if (isSuccess) {
                    console.log('invoices added')
                    invoiceID = response?.data?.invoice_id
                    if (invoiceID) {
                        addInvoiceProducts()
                    }
                    else {
                        console.log('No invoice id')
                    }
                }

            } catch (error) {
                console.error('An error occurred while fetching data: ', error);
                setLoading(false)
            }
        }
        else {
            alert('Please add some products')
        }
    };

    const addInvoiceProducts = async () => {
        console.log('Adding Products');
        try {
            let imageIndex = 0
            for (const product of products) {
                const productsPayload = {
                    invoiceId: invoiceID,
                    productName: product.productDescription,
                    priceOfGoods: product.goodsValue,
                    boxWeight: product.boxWeight,
                    length: product.length,
                    width: product.width,
                    height: product.height,
                    cargoType: deliveryType,
                    additionalCost: deliveryFormData.additionalCost,
                    comments: deliveryFormData.comments,
                    COD: codEnabled ? 1 : 0
                };

                const response = await addProducts(productsPayload);
                const isSuccess = response?.data?.status;
                // console.log(response);
                if (isSuccess) {
                    console.log('Product Added');
                    if (uploadedFiles.length) {
                        await uploadInvoiceProductImage(response?.data?.product_id, uploadedFiles[imageIndex]);
                    }
                }
                imageIndex++
            }
            generateInvoicePDF()
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    };

    const uploadInvoiceProductImage = async (newProductId, imageFile) => {
        if (!imageFile) {
            alert('Please select a file first!');
            return;
        }
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            const response = await uploadProductImage(formData)
            const isSuccess = response?.data?.status;
            if (isSuccess) {
                console.log('Image Uploaded')
                addInvoiceProductImage(newProductId, response?.data?.imageUrl)
            }

        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    }

    const addInvoiceProductImage = async (newProductId, newImageUrl) => {
        const imagesPayload = {
            productId: newProductId,
            imageUrl: newImageUrl,
        };
        console.log('Adding Product Images')
        try {
            const response = await addProductImage(imagesPayload)
            const isSuccess = response?.data?.status;
            if (isSuccess) {
                console.log('Product Image Added')
                // generateInvoicePDF();
            }

        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    }

    const generateInvoicePDF = async () => {
        if (signatureImage) {
            const pdfPayload = {
                invoiceId: invoiceID,
                signatureImage: signatureImage,
            };
            console.log('Gnerating PDF')
            try {
                const response = await generatePDFInvoice(pdfPayload)
                const isSuccess = response?.data?.status;
                if (isSuccess) {
                    console.log('PDF Generated')
                    setLoading(false)
                    // clearLocalData()
                    setFormStep(8)
                }

            } catch (error) {
                console.error('An error occurred while fetching data: ', error);
                setLoading(false)
            }
        }
    }

    const ModeOptions = [
        { value: 'selected-value', label: 'Select Destination' },
        { value: 'austopak', label: 'AUS to PAK' },
        { value: 'paktoaus', label: 'PAK to AUS' },
    ];

    const handleDestinationChange = (value) => {
        setDestination(value)
        setFormStep(2);
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [formStep])


    const validateFormData = (formData) => {
        return Object.values(formData).every(value => value.trim() !== '');
    };

    const clearLocalData = () =>{
        localStorage.removeItem('senderFormData');
        localStorage.removeItem('receiverFormData');
        localStorage.removeItem('productFormData');
        localStorage.removeItem('deliveryFormData');;
    }

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            <div className='bannerBg py-[60px] bg-fixed bg-bottom' style={{ height: 'auto' }}>
                <div className="container">
                    <h2 className='fs50 secondaryClr mb-6 text-center'>Book a Shipment</h2>
                    {formStep !== 1 ?
                        <h4 className='fs24 font-bold text-white mb-6 text-center'>{destination === 'austopak' ? 'Australia to Pakistan' : 'Pakistan to Australia'}</h4>
                        : null}

                    <StatusTree activeStep={formStep} />

                    {formStep === 1 ?
                        <CustomSelect value={destination} onChange={(event) => handleDestinationChange(event.target.value)} section="before:text-[#333537] my-6 max-w-[550px] w-full mx-auto" className="bg-white text-[#333537] " options={ModeOptions} />
                        : null
                    }

                    {formStep === 2 ?
                        <>
                            <h5 className='font-medium fs24 text-white'>Receiver Information</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <CustomInput placeholder="Name" type="text" name="name" value={receiverFormData.name} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Address Line 1" name="address1" type="text" value={receiverFormData.address1} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Address Line 2" name="address2" type="text" value={receiverFormData.address2} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="City" name="city" type="text" value={receiverFormData.city} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder={destination === 'austopak' ? 'District' : 'State'} type="text" name="state" value={receiverFormData.state} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Postcode" type="text" name="postcode" value={receiverFormData.postcode} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Phone No. (Res)" name="phone1" type="text" value={receiverFormData.phone1} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Phone No. (Off)" name="phone2" type="text" value={receiverFormData.phone2} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Email" name="email" type="email" value={receiverFormData.email} onChange={handleReceiverFormChange} />
                                <div className='w-full flex gap-4 md:mt-4'>
                                    <Button text="Back" onClick={() => setFormStep(1)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={() => saveData(3)} isDisabled={!validateFormData(receiverFormData)} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 3 ?
                        <>
                            <h5 className='mt-4 font-medium fs24 text-[#333537]'>Sender Information</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <CustomInput placeholder="Name" name="name" type="text" value={senderFormData.name} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Address" name="address" type="text" value={senderFormData.address} onChange={handleSenderFormChange} />
                                <CustomInput placeholder={destination === 'austopak' ? 'Suburb' : 'District'} name="district" type="text" value={senderFormData.district} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="City" name="city" type="text" value={senderFormData.city} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="State" name="state" type="text" value={senderFormData.state} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Postcode" name="postcode" type="text" value={senderFormData.postcode} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Phone No. (Res)" name="phone1" type="text" value={senderFormData.phone1} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Phone No. (Off)" name="phone2" type="text" value={senderFormData.phone2} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Email" name="email" type="email" value={senderFormData.email} onChange={handleSenderFormChange} />
                                <div className='w-full flex gap-4 md:mt-4'>
                                    <Button text="Back" onClick={() => setFormStep(2)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={() => saveData(4)} isDisabled={!validateFormData(senderFormData)} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 4 ?
                        <>
                            <h5 className='mt-4 font-medium fs24 text-[#333537]'>Product Description</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <textarea placeholder='Product Description' name="productDescription" value={productFormData.productDescription} onChange={handleProductFormChange} className='h-[150px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                                <CustomInput placeholder="Goods value" name="goodsValue" type="text" value={productFormData.goodsValue} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Box Weight (kg)" name="boxWeight" type="text" value={productFormData.boxWeight} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Length (cm)" name="length" type="text" value={productFormData.length} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Width (cm)" name="width" type="text" value={productFormData.width} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Height (cm)" name="height" type="text" value={productFormData.height} onChange={handleProductFormChange} />
                                <div className='relative bg-white shadow rounded-[5px] w50_10'>
                                    <input id='product-img-file' accept="image/*" name='image' type="file" className='cursor-pointer absolute opacity-0 w-full h-full top-0 z-10' style={{ width: "100%" }} />
                                    <span className='flex_align w-[40px] mx-auto md:h-full h-[40px]  fs20'><i className="fas fa-file-upload"></i></span>
                                </div>
                                {productImages.length > 0 && (
                                    <div className="thumbnails product-images w-full">
                                        {productImages.map((image, index) => (
                                            <div key={index} className='product-image'>
                                                <img src={image.src} alt={`Uploaded ${image.name}`} style={{ width: 100, height: 100, objectFit: 'cover' }} />
                                                <button onClick={() => removeProductImage(index)} className='remove-btn'><span>&times;</span></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {editProductIndex >= 0 ? 
                                    <Button onClick={()=>saveEditedProduct(editProductIndex)} text="Save Product" className="secondaryBg text-white w-full formBtn" />
                                    :
                                    <Button onClick={handleAddProduct} text="Add Product" className="secondaryBg text-white w-full formBtn" />
                                }
                            </div>
                            <div className='mt-6 lg:mb-14 md:mb-8 mb-4 bg-white rounded-[8px] lg:overflow-x-hidden overflow-x-auto'>
                                <table className='w-full table border-collapse border-1  customTable'>
                                    <thead>
                                        <tr>
                                            <th style={{width: '5%'}}>Sr. No</th>
                                            <th style={{width: '35%'}}>Product Description</th>
                                            <th style={{width: '10%'}}>Goods Value</th>
                                            <th style={{width: '10%'}}>Box Weight</th>
                                            <th style={{width: '10%'}}>Length (cm)</th>
                                            <th style={{width: '10%'}}>Width (cm)</th>
                                            <th style={{width: '10%'}}>Height (cm)</th>
                                            <th style={{width: '10%'}}>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className='pt-4'>
                                        {products.length ? products.map((product, index) => (
                                            <tr key={index}>
                                                <td className='text-center py-2'>{index + 1}</td>
                                                <td>{product.productDescription}</td>
                                                <td className='text-center py-2'>{product.goodsValue}</td>
                                                <td className='text-center py-2'>{product.boxWeight}</td>
                                                <td className='text-center py-2'>{product.length}</td>
                                                <td className='text-center py-2'>{product.width}</td>
                                                <td className='text-center py-2'>{product.height}</td>
                                                <td className='text-center py-2'>
                                                    <div className='flex gap-2 justify-center'>
                                                        <span onClick={() => handleEditProduct(index)} className='p-2 px-3 rounded bg-[#f0b913] cursor-pointer'><i className='fas fa-pencil'></i></span>
                                                        <span onClick={() => handleRemoveProduct(index)} className='p-2 px-3 rounded bg-[#f0b913] cursor-pointer'><i className='fas fa-trash'></i></span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )) 
                                        : 
                                         <tr>
                                            <td colSpan={8} className='pt-3 text-center text-lg'>No Product added</td>
                                         </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className='w-full flex gap-4 mt-6'>
                                <Button text="Back" onClick={() => setFormStep(3)} className="secondaryBg text-white w-full formBtn" />
                                <Button text="Next" onClick={() => saveData(5)} isDisabled={products.length ? false : true} className="secondaryBg text-white w-full formBtn" />
                            </div>
                        </>
                        : null
                    }

                    {formStep === 5 ?
                        <>
                            <h5 className='mt-4 font-medium fs24 text-[#333537]'>Pickup Information</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm md:gap-y-4 gap-y-0 mt-4'>
                                {destination === 'paktoaus' ?
                                    <div className="flex justify-between items-center w-full">
                                        <h6 className='fs16 fw600'>Cash on Delivery</h6>
                                        <button type="button" onClick={() => setCodEnabled(!codEnabled)}
                                            className={`${codEnabled ? 'bg-blue-600' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}>
                                            <span className={`${codEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`} />
                                        </button>
                                    </div>
                                    : null}
                                <CustomSelect className='bg-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={deliveryType} onChange={handleDeliveryTypeChange} options={deliveryTypeOptions} />
                                {deliveryType === 'Collection' ?
                                    <>
                                        <CustomInput placeholder="Additional Cost (if any)" name="additionalCost" type="text" value={deliveryFormData.additionalCost} onChange={handleDeliveryFormChange} />
                                        <textarea placeholder='Comments' name='comments' value={deliveryFormData.comments} onChange={handleDeliveryFormChange}
                                            className='h-[150px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                                    </>
                                    : null
                                }
                                <div className='w-full flex gap-4 mt-6'>
                                    <Button text="Back" onClick={() => setFormStep(4)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={() => saveData(6)} isDisabled={deliveryType === ''} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 6 ?
                        <>
                            <div className="bg-white mt-5 border-black border-2 md:p-6 p-4">
                                <div className='md:pb-6 md:mb-6 pb-4 mb-4 border-b-2 border-black'>
                                    <h5 className='fs20 mb-3 fw600'>Receiver Information</h5>
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Name:</span>
                                            <span className='font-medium'>{receiverFormData.name}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>Address Line 1:</span>
                                            <span className='font-medium'>{receiverFormData.address1}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Address Line 2: </span>
                                            <span className='font-medium'>{receiverFormData.address2}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>City:</span>
                                            <span className='font-medium'>{receiverFormData.city}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> State:</span>
                                            <span className='font-medium'>{receiverFormData.state}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Postcode:</span>
                                            <span className='font-medium'>{receiverFormData.postcode}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Phone No. (Res):</span>
                                            <span className='font-medium'>{receiverFormData.phone1}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Phone No. (Off):</span>
                                            <span className='font-medium'>{receiverFormData.phone2}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Email:</span>
                                            <span className='font-medium'>{receiverFormData.email}</span>
                                        </h6>
                                    </div>
                                </div>

                                <div className='md:pb-6 md:mb-6 pb-4 mb-4 border-b-2 border-black'>
                                    <h5 className='fs20 mb-3 fw600'>Sender Information</h5>
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Name:</span>
                                            <span className='font-medium'>{senderFormData.name}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>Address</span>
                                            <span className='font-medium'>{senderFormData.address}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>City:</span>
                                            <span className='font-medium'>{senderFormData.city}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Suburb:</span>
                                            <span className='font-medium'>{senderFormData.state}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Postcode:</span>
                                            <span className='font-medium'>{senderFormData.postcode}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Phone No. (Res):</span>
                                            <span className='font-medium'>{senderFormData.phone1}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Phone No. (Off):</span>
                                            <span className='font-medium'>{senderFormData.phone2}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Email:</span>
                                            <span className='font-medium'>{senderFormData.email}</span>
                                        </h6>
                                    </div>
                                </div>

                                <div className='md:pb-6 md:mb-6 pb-4 mb-4 border-b-2 border-black'>
                                    <h5 className='fs20 mb-3 fw600'>Product Description</h5>
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <table className='w-100 table border-collapse border-1'>
                                            <thead>
                                                <tr>
                                                    <th>Sr. No</th>
                                                    <th className='text-start ps-2 xl:w-[40%]'>Product Description</th>
                                                    <th>Goods Value</th>
                                                    <th>Box Weight</th>
                                                    <th>Length (cm)</th>
                                                    <th>Width (cm)</th>
                                                    <th>Height (cm)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.length ? products.map((product, index) => (
                                                    <tr key={index}>
                                                        <td className='text-center'>{index + 1}</td>
                                                        <td className='ps-2'>{product.productDescription}</td>
                                                        <td className='text-center'>{product.goodsValue}</td>
                                                        <td className='text-center'>{product.boxWeight}</td>
                                                        <td className='text-center'>{product.length}</td>
                                                        <td className='text-center'>{product.width}</td>
                                                        <td className='text-center'>{product.height}</td>
                                                    </tr>
                                                ))
                                                    :
                                                    <tr>
                                                        <td colSpan={7} className='pt-3 text-center text-lg'>No Product added</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h5 className='fs20 mb-3 fw600'>Pickup Info</h5>
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>Pickup Type</span>
                                            <span className='font-medium'>{deliveryType}</span>
                                        </h6>
                                    </div>
                                    <h5 className='fs20 mb-3 fw600 mt-5'>Delivery Info</h5>
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Cash on Delivery:</span>
                                            <span className='font-medium'>{codEnabled ? 'Yes' : 'No'}</span>
                                        </h6>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.signatureForm}>
                                <SignaturePad ref={sigPad} canvasProps={{ className: styles.sigCanvas }} />
                                <div className='flex gap-3'>
                                    <Button onClick={clearSignature} text="Clear" className="secondaryBg mt-4 text-white w-full formBtn" />
                                    <Button onClick={saveSignature} text="Save" className="secondaryBg mt-4 text-white w-full formBtn" />
                                </div>
                                {signatureImage && (
                                    <img src={`data:image/png;base64,` + signatureImage} alt="Signature" style={{ display: 'block', margin: '10px auto', border: '1px solid black' }} />
                                )}
                            </div>
                            <div className='w-full flex gap-4 mt-6'>
                                <Button text="Edit Details" onClick={() => setFormStep(5)} className="secondaryBg text-white w-full formBtn" />
                                <Button onClick={generateInvoice} text="Submit" isDisabled={signatureImage ? false : true} className="secondaryBg text-white w-full formBtn" />
                            </div>
                        </>
                        : null
                    }

                    {formStep === 7 ? 
                        <></>
                        : null
                    }
                    {formStep === 8 ?
                        <div>
                            <h1 className="fs70 text-center uppercase">Thank you!</h1>
                            <p className="text-center fs17">Thank you for choosing us to handle your cargo shipment! Your trust means the world to us.</p>
                            <p className="text-center fs17">You will receive and Email shortly after confirmation of your payment</p>
                            <div className='flex gap-4 mt-5'>
                                <LinkButton link='/' text={'Back to Home Page'} className="secondaryBg text-white w-full formBtn"/>
                                <Button onClick={()=>window.location.reload()} text={'Book a New Shipment'} className="secondaryBg text-white w-full formBtn"/>
                            </div>
                        </div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default AddInvoiceForm
