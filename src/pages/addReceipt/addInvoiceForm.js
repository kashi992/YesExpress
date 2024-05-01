import React, { useState, useEffect } from 'react'
import CustomInput from '../../components/customInput/customInput'
import './index.scss'
import Button from '../../components/buttons/button'
import { addInvoice, addProducts, uploadProductImage, addProductImage, generatePDFInvoice } from '../../services/api/invoiceApi';
import CustomSelect from '../../components/customSelect/customSelect'
import Loader from '../../components/loader';

const AddInvoiceForm = () => {
    const [deliveryType, setDeliveryType] = useState('selected-value');
    const [codEnabled, setCodEnabled] = useState(false);
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const currentUserId = 44;
    let invoiceID = '';

    const deliveryTypeOptions = [
        { value: 'selected-value', label: 'Delivery Type' },
        { value: 'Dropoff', label: 'Drop-off' },
        { value: 'Collection', label: 'Collection' },
        { value: 'Charity', label: 'Charity' },
    ];

    const [senderFormData, setSenderFormData] = useState(() => {
        const savedData = localStorage.getItem('senderFormData');
        return savedData ? JSON.parse(savedData) : { 
            name: '',
            address: '',
            district:'',
            city:'',
            state:'',
            postcode:'',
            phone1:'',
            phone2:'',
            email: ''  
        };
    });
    const [receiverFormData, setReceiverFormData] = useState(() => {
        const savedData = localStorage.getItem('receiverFormData');
        return savedData ? JSON.parse(savedData) : { 
            name: '',
            address1: '',
            address2:'',
            city:'',
            state:'',
            postcode:'',
            phone1:'',
            phone2:'',
            email: '' 
        };
    });
    const [productFormData, setProductFormData] = useState({
        productDescription: '',
        goodsValue: '',
        boxWeight:'',
        length:'',
        width:'',
        height:'' 
    });
    const [deliveryFormData, setDeliveryFormData] = useState(() => {
        const savedData = localStorage.getItem('deliveryFormData');
        return savedData ? JSON.parse(savedData) : { 
            additionalCost: 0,
            comments:''
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
        if(event.target.value === 'Dropoff'){
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

    const saveData = () => {
        localStorage.setItem('senderFormData', JSON.stringify(senderFormData));
        localStorage.setItem('receiverFormData', JSON.stringify(receiverFormData));
        localStorage.setItem('productFormData', JSON.stringify(productFormData));
        localStorage.setItem('deliveryFormData', JSON.stringify(deliveryFormData));
        console.log('Data Saved')
    };

    useEffect(() => {
        const data = localStorage.getItem('senderFormData');
        if (data) {
            setSenderFormData(JSON.parse(data));
        }
    }, []);

    // const [productImages, setProductImages] = useState(() => {
    //     const savedImages = localStorage.getItem('productImages');
    //     return savedImages ? JSON.parse(savedImages) : [];
    // });
    const [productImages, setProductImages] = useState([]);
    
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const addImageFile = () => {
        const fileReader = new FileReader();
        const file = document.querySelector('#product-img-file').files[0];
        if(file){
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
                boxWeight:'',
                length:'',
                width:'',
                height:''
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

    const generateInvoice = async (e) => {
        e.preventDefault();
        const invoicePayload = {
            invoiceType: "PakInvoice",  // AusInvoice
            city:"lahore",
            country:"pakistan", 
            userId: currentUserId,
            data:{
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
          if(isSuccess){
            console.log('invoices added')
            invoiceID = response?.data?.invoice_id
            if(invoiceID){
                addInvoiceProducts()
            }
            else{
                console.log('No invoice id')
            }
          }
          
        } catch (error) {
          console.error('An error occurred while fetching data: ', error);
          setLoading(false)
        }
    };

    const addInvoiceProducts = async () => {
        console.log('Adding Products');
        try {
            let imageIndex=0
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
                    if(uploadedFiles.length){
                        await uploadInvoiceProductImage(response?.data?.product_id, uploadedFiles[imageIndex]);
                    }
                }
                imageIndex ++
            }
            generateInvoicePDF()
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    };
    
    const uploadInvoiceProductImage = async (newProductId, imageFile) =>{
        if (!imageFile) {
            alert('Please select a file first!');
            return;
        }
        const formData = new FormData();
        formData.append('image', imageFile);
        try {
            const response = await uploadProductImage(formData)
            const isSuccess = response?.data?.status;
            if(isSuccess){
                console.log('Image Uploaded')
                addInvoiceProductImage(newProductId, response?.data?.imageUrl)
            }
            
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    }

    const addInvoiceProductImage = async (newProductId, newImageUrl) =>{
        const imagesPayload = {
            productId: newProductId,
            imageUrl: newImageUrl,
        };
        console.log('Adding Product Images')
        try {
            const response = await addProductImage(imagesPayload)
            const isSuccess = response?.data?.status;
            if(isSuccess){
                console.log('Product Image Added')
                // generateInvoicePDF();
            }
            
          } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
          }
    }

    const generateInvoicePDF = async () =>{      
        const pdfPayload = {
            invoiceId: invoiceID,
            signatureImage: "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FFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRQDFIkJAAABrklEQVRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDsBE5nshsyAFVBAAQUUUEABBRRQwETGZ0ABBRRQQAEFFFBAAQWyEzCRyW7IDFgBBRRQQAEFFFBAAQVMZHwGFFBAAQUUUEABBRRQIDuB/wNQ7R30ObXQrgAAAABJRU5ErkJggg==",
        };
        console.log('Gnerating PDF')
        try {
            const response = await generatePDFInvoice(pdfPayload)
            const isSuccess = response?.data?.status;
            if(isSuccess){
                // console.log('PDF Generated')
                setLoading(false)
            }
            
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
            setLoading(false)
        }
    }
      

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            <div className='primaryClrBg py-[60px]'>
                <div className="container">
                    <h2 className='h2 secondaryClr'>Add Receipt</h2>
                    <h5 className='h5'>Receiver Information</h5>
                    <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                        <CustomInput placeholder="Name" type="text" name="name" value={receiverFormData.name} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="Address Line 1"  name="address1" type="text" value={receiverFormData.address1} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="Address Line 2"  name="address2" type="text" value={receiverFormData.address2} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="City"  name="city" type="text" value={receiverFormData.city} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="State" type="text"  name="state" value={receiverFormData.state} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="Postcode" type="text"  name="postcode" value={receiverFormData.postcode} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="Phone No. (Res)"  name="phone1" type="text" value={receiverFormData.phone1} onChange={handleReceiverFormChange}/>
                        <CustomInput placeholder="Phone No. (Off)"  name="phone2" type="text"value={receiverFormData.phone2} onChange={handleReceiverFormChange} />
                        <CustomInput placeholder="Email"  name="email" type="email" value={receiverFormData.email} onChange={handleReceiverFormChange}/>
                        <Button text="Next" onClick={saveData} className="secondaryBg text-white w-full formBtn" />
                    </div>
                    <h5 className='h5 mt-4'>Sender Information</h5>
                    <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                        <CustomInput placeholder="Name" name="name" type="text" value={senderFormData.name} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="Address" name="address" type="text" value={senderFormData.address} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="District" name="district" type="text" value={senderFormData.district} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="City" name="city" type="text" value={senderFormData.city} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="State" name="state" type="text" value={senderFormData.state} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="Postcode" name="postcode" type="text" value={senderFormData.postcode} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="Phone No. (Res)" name="phone1" type="text" value={senderFormData.phone1} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="Phone No. (Off)" name="phone2" type="text" value={senderFormData.phone2} onChange={handleSenderFormChange}/>
                        <CustomInput placeholder="Email" name="email" type="email" value={senderFormData.email} onChange={handleSenderFormChange}/>
                        <Button text="Next" onClick={saveData} className="secondaryBg text-white w-full formBtn" />
                    </div>
                    <h5 className='h5 mt-4'>Product Description</h5>
                    <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                        <textarea placeholder='Product Description' name="productDescription" value={productFormData.productDescription} onChange={handleProductFormChange} className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                        <CustomInput placeholder="Goods value" name="goodsValue" type="text" value={productFormData.goodsValue} onChange={handleProductFormChange}/>
                        <CustomInput placeholder="Box Weight (kg)" name="boxWeight" type="text" value={productFormData.boxWeight} onChange={handleProductFormChange}/>
                        <CustomInput placeholder="Length (cm)" name="length" type="text" value={productFormData.length} onChange={handleProductFormChange}/>
                        <CustomInput placeholder="Width (cm)" name="width" type="text" value={productFormData.width} onChange={handleProductFormChange}/>
                        <CustomInput placeholder="Height (cm)" name="height" type="text" value={productFormData.height} onChange={handleProductFormChange}/>
                        <div className='relative'>
                            <a className='flex_align w-[40px] h-[40px] rounded-[5px] shadow text-[20px] bg-white'><i className="fas fa-file-upload"></i></a>
                            <input id='product-img-file' accept="image/*" name='image' type="file" className='cursor-pointer absolute opacity-0 w-full h-full top-0 z-10' style={{ width: "100%" }} />
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
                        <table className='w-100 table border-collapse border-1'>
                            <thead>
                                <tr>
                                    <th>Sr. No</th>
                                    <th style={{width: '40%'}}>Product Description</th>
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
                                )): null}
                            </tbody>
                        </table>
                    </div>
                    <h5 className='h5 mt-4'>Delivery Info</h5>
                    <div className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                        <div className="flex justify-between items-center w-full">
                            <h6 className='h6 fw600'>Cash on Delivery</h6>
                            <button type="button" onClick={() => setCodEnabled(!codEnabled)}
                            className={`${codEnabled ? 'bg-blue-600' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}>
                                <span className={`${codEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`}/>
                            </button>
                        </div>
                        <CustomSelect className='bg-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={deliveryType} onChange={handleDeliveryTypeChange} options={deliveryTypeOptions} />
                        {deliveryType === 'Collection' ?
                            <>
                                <CustomInput placeholder="Additional Cost (if any)" name="additionalCost"  type="text" value={deliveryFormData.additionalCost} onChange={handleDeliveryFormChange}/>
                                <textarea placeholder='Comments' name='comments'  value={deliveryFormData.comments} onChange={handleDeliveryFormChange}
                                className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' id="" cols="30" rows="10"></textarea>
                            </>
                        : null
                        }
                        <Button onClick={saveData} text="Next" className="secondaryBg text-white w-full formBtn" />
                    </div>
                    <Button onClick={generateInvoice} text="Submit" className="secondaryBg mt-4 text-white w-full formBtn" />
                </div>
            </div>
        </>
    )
}

export default AddInvoiceForm
