import React, { useState, useEffect, useRef, useContext } from 'react'
import CustomInput from '../../components/customInput/customInput'
import Button from '../../components/buttons/button'
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
    const currentUserId = 'wb-u-'+ auth.userId;
    let invoiceID = '';
    const [formStep, setFormStep] = useState(1)
    const [destination, setDestination] = useState('')
    const [invoiceType, setInvoiceType] = useState('')

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
    const handleProductFormChange = (event) => {
        const { name, value } = event.target;
        setProductFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    useEffect(()=>{
        setInvoiceType(destination === 'paktoaus' ? "PakInvoice" : "AusInvoice")
    }, [destination])

    const generateInvoice = async (e) => {
        e.preventDefault();
        if(products.length && invoiceType){
            const invoicePayload = {
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
        else{
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

    const handleDestinationChange = (value)=>{
        setDestination(value)
        setFormStep(2);
    }

    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[formStep])


    const validateFormData = (formData) => {
        return Object.values(formData).every(value => value.trim() !== '');
    };

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            <div className='bannerBg py-[60px] bg-fixed bg-bottom' style={{ height: 'auto' }}>
                <div className="container">
                    <h2 className='h2 secondaryClr mb-4'>Book a Shipment</h2>
                    {formStep === 1 ?
                        <CustomSelect onChange={(event) => handleDestinationChange(event.target.value)} section="before:text-[#333537] mb-4 max-w-[550px] w-full" className="bg-white text-[#333537] " options={ModeOptions} />
                        : null
                    }
                    {formStep !== 1 ?
                        <StatusTree activeStep={formStep}/>
                        : null
                    }

                    {formStep === 2 ?
                        <>
                            <h5 className='h5'>Receiver Information</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <CustomInput placeholder="Name" type="text" name="name" value={receiverFormData.name} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Address Line 1" name="address1" type="text" value={receiverFormData.address1} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Address Line 2" name="address2" type="text" value={receiverFormData.address2} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="City" name="city" type="text" value={receiverFormData.city} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder={destination === 'austopak' ? 'State': 'Suburb'} type="text" name="state" value={receiverFormData.state} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Postcode" type="text" name="postcode" value={receiverFormData.postcode} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Phone No. (Res)" name="phone1" type="text" value={receiverFormData.phone1} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Phone No. (Off)" name="phone2" type="text" value={receiverFormData.phone2} onChange={handleReceiverFormChange} />
                                <CustomInput placeholder="Email" name="email" type="email" value={receiverFormData.email} onChange={handleReceiverFormChange} />
                                <div className='w-full flex gap-4 mt-4'>
                                    <Button text="Back" onClick={()=> setFormStep(1)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={()=>saveData(3)} isDisabled={!validateFormData(receiverFormData)} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 3 ?
                        <>
                            <h5 className='h5 mt-4'>Sender Information</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <CustomInput placeholder="Name" name="name" type="text" value={senderFormData.name} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Address" name="address" type="text" value={senderFormData.address} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="District" name="district" type="text" value={senderFormData.district} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="City" name="city" type="text" value={senderFormData.city} onChange={handleSenderFormChange} />
                                <CustomInput placeholder={destination === 'austopak' ? 'Suburb': 'State'} name="state" type="text" value={senderFormData.state} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Postcode" name="postcode" type="text" value={senderFormData.postcode} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Phone No. (Res)" name="phone1" type="text" value={senderFormData.phone1} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Phone No. (Off)" name="phone2" type="text" value={senderFormData.phone2} onChange={handleSenderFormChange} />
                                <CustomInput placeholder="Email" name="email" type="email" value={senderFormData.email} onChange={handleSenderFormChange} />
                                <div className='w-full flex gap-4 mt-4'>
                                    <Button text="Back" onClick={()=> setFormStep(2)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={()=>saveData(4)} isDisabled={!validateFormData(senderFormData)} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 4 ?
                        <>
                            <h5 className='h5 mt-4'>Product Description</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <textarea placeholder='Product Description' name="productDescription" value={productFormData.productDescription} onChange={handleProductFormChange} className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                                <CustomInput placeholder="Goods value" name="goodsValue" type="text" value={productFormData.goodsValue} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Box Weight (kg)" name="boxWeight" type="text" value={productFormData.boxWeight} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Length (cm)" name="length" type="text" value={productFormData.length} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Width (cm)" name="width" type="text" value={productFormData.width} onChange={handleProductFormChange} />
                                <CustomInput placeholder="Height (cm)" name="height" type="text" value={productFormData.height} onChange={handleProductFormChange} />
                                <div className='relative'>
                                    <input id='product-img-file' accept="image/*" name='image' type="file" className='cursor-pointer absolute opacity-0 w-full h-full top-0 z-10' style={{ width: "100%" }} />
                                    <span className='flex_align w-[40px] h-[40px] cursor-pointer rounded-[5px] shadow text-[20px] bg-white'><i className="fas fa-file-upload"></i></span>
                                </div>
                                {productImages.length > 0 && (
                                    <div className="thumbnails product-images">
                                        {productImages.map((image, index) => (
                                            <div key={index} className='product-image'>
                                                <img src={image.src} alt={`Uploaded ${image.name}`} style={{ width: 100, height: 100, objectFit: 'cover' }} />
                                                <button onClick={() => removeProductImage(index)} className='remove-btn'><span>&times;</span></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <Button onClick={handleAddProduct} text="Add Product" className="secondaryBg text-white w-full formBtn" />
                            </div>
                            <div className='mt-4'>
                                <table className='w-full table border-collapse border-1'>
                                    <thead>
                                        <tr>
                                            <th style={{width: '5%'}}>Sr. No</th>
                                            <th style={{width: '40%'}}>Product Description</th>
                                            <th style={{width: '11%'}}>Goods Value</th>
                                            <th style={{width: '11%'}}>Box Weight</th>
                                            <th style={{width: '11%'}}>Length (cm)</th>
                                            <th style={{width: '11%'}}>Width (cm)</th>
                                            <th style={{width: '11%'}}>Height (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products ? products.map((product, index) => (
                                            <tr key={index}>
                                                <td className='text-center'>{index + 1}</td>
                                                <td>{product.productDescription}</td>
                                                <td className='text-center'>{product.goodsValue}</td>
                                                <td className='text-center'>{product.boxWeight}</td>
                                                <td className='text-center'>{product.length}</td>
                                                <td className='text-center'>{product.width}</td>
                                                <td className='text-center'>{product.height}</td>
                                            </tr>
                                        )) : null}
                                    </tbody>
                                </table>
                            </div>
                            <div className='w-full flex gap-4 mt-6'>
                                    <Button text="Back" onClick={()=> setFormStep(3)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={()=>saveData(5)} isDisabled={products.length ? false : true} className="secondaryBg text-white w-full formBtn" />
                            </div>
                        </>
                        : null
                    }

                    {formStep === 5 ?
                        <>
                            <h5 className='h5 mt-4'>Delivery Info</h5>
                            <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                                <div className="flex justify-between items-center w-full">
                                    <h6 className='h6 fw600'>Cash on Delivery</h6>
                                    <button type="button" onClick={() => setCodEnabled(!codEnabled)}
                                        className={`${codEnabled ? 'bg-blue-600' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}>
                                        <span className={`${codEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`} />
                                    </button>
                                </div>
                                <CustomSelect className='bg-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={deliveryType} onChange={handleDeliveryTypeChange} options={deliveryTypeOptions} />
                                {deliveryType === 'Collection' ?
                                    <>
                                        <CustomInput placeholder="Additional Cost (if any)" name="additionalCost" type="text" value={deliveryFormData.additionalCost} onChange={handleDeliveryFormChange} />
                                        <textarea placeholder='Comments' name='comments' value={deliveryFormData.comments} onChange={handleDeliveryFormChange}
                                            className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                                    </>
                                    : null
                                }
                                <div className='w-full flex gap-4 mt-6'>
                                    <Button text="Back" onClick={()=> setFormStep(4)} className="secondaryBg text-white w-full formBtn" />
                                    <Button text="Next" onClick={()=>saveData(6)} isDisabled={deliveryType === ''} className="secondaryBg text-white w-full formBtn" />
                                </div>
                            </div>
                        </>
                        : null
                    }

                    {formStep === 6 ?
                        <>
                            <div className="bg-white mt-5 border-black border-2 p-6">
                                <div className='pb-6 mb-6 border-b-2 border-black'>
                                    <h5 className='h5 mb-3 fw600'>Receiver Information</h5>
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

                                <div className='pb-6 mb-6 border-b-2 border-black'>
                                    <h5 className='h5 mb-3 fw600'>Sender Information</h5>
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
                                
                                <div className='pb-6 mb-6 border-b-2 border-black'>
                                    <h5 className='h5 mb-3 fw600'>Product Description</h5>
                                    
                                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>    
                                        <table className='w-100 table border-collapse border-1'>
                                            <thead>
                                                <tr>
                                                    <th>Sr. No</th>
                                                    <th style={{ width: '40%' }}>Product Description</th>
                                                    <th>Goods Value</th>
                                                    <th>Box Weight</th>
                                                    <th>Length (cm)</th>
                                                    <th>Width (cm)</th>
                                                    <th>Height (cm)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products ? products.map((product, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.productDescription}</td>
                                                        <td>{product.goodsValue}</td>
                                                        <td>{product.boxWeight}</td>
                                                        <td>{product.length}</td>
                                                        <td>{product.width}</td>
                                                        <td>{product.height}</td>
                                                    </tr>
                                                )) : null}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h5 className='h5 mb-3 fw600'>Delivery Info</h5>
                                        <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'> Cash on Delivery:</span>
                                            <span className='font-medium'>{codEnabled ? 'Yes' : 'No'}</span>
                                        </h6>
                                        <h6 className='flex items-center gap-3 font-semibold'>
                                            <span className='min-w-[150px]'>Delivery Type</span>
                                            <span className='font-medium'>{deliveryType}</span>
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
                                    <Button text="Edit Details" onClick={()=> setFormStep(5)} className="secondaryBg text-white w-full formBtn" />
                                    <Button onClick={generateInvoice} text="Submit" isDisabled={signatureImage ? false : true} className="secondaryBg text-white w-full formBtn" />
                            </div>
                        </>
                        : null
                    }
                    
                </div>
            </div>
        </>
    )
}

export default AddInvoiceForm
