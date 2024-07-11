import React, { useEffect, useState } from 'react'
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from '../customSelect/customSelect'
import TickBox from '../../assets/images/tickBox'
import Button from '../buttons/button';
import { getQuote } from '../../services/api/invoiceApi';
import './index.scss'
import LinkButton from '../buttons/linkButton';
import Loader from '../loader';
const EstimateCalculator = ({className}) => {
    const [transportMode, setTransportMode] = useState('');
    // const [selectedDate, setSelectedDate] = useState(null);
    const [products, setProducts] = useState([])
    const [editProductIndex, setEditProductIndex] = useState()
    const [quotedPrice, setQuotedPrice] = useState('')
    const [codEnabled, setCodEnabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleTransportModeChange = (event) => {
        setTransportMode(event.target.value);
    };


    const transportModeOptions = [
        { value: '', label: 'Select Transport Mode' },
        { value: '1', label: 'Sea' },
    ];

    const originCountryOptions = [
        { value: '', label: 'Select Origin Country' },
        { value: 'australia', label: 'Australia to Pakistan' },
        { value: 'pakistan', label: 'Pakistan to Australia' }
    ];

    const collectionTypeOptions = [
        { value: '', label: 'Select Collection Type' },
        { value: 'Dropoff', label: 'Drop-Off' },
        { value: 'Collection', label: 'Collection' }
    ];

    const [productFormData, setProductFormData] = useState({
        country: '',
        productDescription: '',
        goodsValue: '',
        boxWeight: '',
        length: '',
        width: '',
        height: '',
        cargo_type: '',
        additionalCost: 0,
        COD: 0
    });

    useEffect(()=>{
        setProductFormData(prevData => ({
            ...prevData,
            ['COD']: codEnabled ? 1 : 0
        }));
        for(const product of products){
            product.COD = codEnabled ? 1 : 0
        }
    },[codEnabled])

    useEffect(()=>{
        setQuotedPrice('')
    },[productFormData, codEnabled, products])

    const handleAddProduct = () => {
        if (productFormData) {
            setProducts([...products, productFormData]);
            setProductFormData({
                country: productFormData.country,
                productDescription: '',
                goodsValue: '',
                boxWeight: '',
                length: '',
                width: '',
                height: '',
                cargo_type: productFormData.cargo_type,
                additionalCost: 0,
                COD: codEnabled ? 1 : 0
            });
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

    const getCustomQuote = async ()=>{
        setLoading(true)
        const quotePayload = {
            "productData": products
        }
        try {
            const response = await getQuote(quotePayload);
            const isSuccess = response?.data?.status;
            if (isSuccess) {
                setQuotedPrice(response?.data?.quotePrice)
            }
        } catch (error) {
            console.error('An error occurred while fetching data: ', error);
        }
        setLoading(false)
    }

    const clearQuote = () =>{
        setQuotedPrice('')
        setProducts('')
        setProductFormData({
            country: '',
            productDescription: '',
            goodsValue: '',
            boxWeight: '',
            length: '',
            width: '',
            height: '',
            cargo_type: '',
            additionalCost: 0,
            COD: 0
        })
    }

    useEffect(()=>{
        setCodEnabled(false)
    },[productFormData.country])

    function isProductFormValid(productFormData) {
        for (let key in productFormData) {
          if (productFormData[key] === '') {
            return false;
          }
        }
        return true;
    }


    return (
        <div className={`${className}`}>
            {loading ? <Loader type={'fixed'} /> : null}
            {!quotedPrice ?
                <div className='flex gap-y-3 justify-between flex-wrap calculatorWrap'>
                    <h6 className='md:text-lg text-base w-full font-bold'>Delivery Info</h6>
                    <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
                    <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' name='country' value={productFormData.country} onChange={handleProductFormChange} options={originCountryOptions} />
                    <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' name='cargo_type' value={productFormData.cargo_type} onChange={handleProductFormChange} options={collectionTypeOptions} />
                    {productFormData.country === 'pakistan' ? 
                        <div className="flex justify-between items-center lg:w-[50%] w-full ps-3">
                            <h6 className='fs16 fw600'>Cash on Delivery</h6>
                            <button type="button" onClick={() => setCodEnabled(!codEnabled)}
                                className={`${codEnabled ? 'bg-blue-600' : 'bg-gray-600'} relative inline-flex items-center h-6 rounded-full w-11`}>
                                <span className={`${codEnabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`} />
                            </button>
                        </div>
                    : null}
                    <h6 className='md:text-lg text-base w-full mt-4 font-bold'>Products Info</h6>
                    <input placeholder='Product Name' name="productDescription" value={productFormData.productDescription} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' />
                    <input placeholder='Goods Value' name="goodsValue" value={productFormData.goodsValue} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' />
                    <input placeholder="Box Weight (kg)" name="boxWeight" type="text" value={productFormData.boxWeight} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
                    <input placeholder="Length (cm)" name="length" type="text" value={productFormData.length} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
                    <input placeholder="Width (cm)" name="width" type="text" value={productFormData.width} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
                    <input placeholder="Height (cm)" name="height" type="text" value={productFormData.height} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
                    <div className='mt-4 w-full'>
                        {editProductIndex >= 0 ?
                            <Button onClick={()=>saveEditedProduct(editProductIndex)} text="Save Product" className="secondaryBg text-white w-full formBtn hover:bg-[#f0b913]" />
                            :
                            <Button onClick={handleAddProduct} isDisabled={!isProductFormValid(productFormData)} text="Add Product" className="secondaryBg text-white w-full formBtn" />
                        }
                    </div>
                    <div className='mt-6 bg-white rounded-[8px] w-full md:overflow-x-hidden overflow-x-auto'>
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
                    <div className='w-full flex gap-4 lg:mt-8 mt-4'>
                        <Button onClick={getCustomQuote} className={`w-full uppercase h-[50px] text-nowrap bg-[#333537] hover:text-[#f0b913] text-white`} isDisabled={!products.length} text='Get an Estimate' hasIcon={<TickBox className='w-[16px]' iconclr={'currentColor'} />} />
                    </div>
                </div>
            : 
                <div>
                    <div className='border border-1 border-[#f0b913] p-4 mt-10 rounded-sm'>
                        <h3 className='text-2xl mb-5 text-center font-bold'>Here's your quote for the requested products.</h3>
                        <h3 className='text-lg xl:text-xl mb-3'><strong>Invoice Type:</strong> {productFormData.country === 'australia' ? 'Australia to Pakistan':'Pakistan to Australia'}</h3>
                        {productFormData.country === 'pakistan' ? 
                            <h3 className='text-lg xl:text-xl mb-3'><strong>COD:</strong> {codEnabled ? 'YES' : 'NO'}</h3>
                            : null
                        }
                        <h3 className='text-lg xl:text-xl mb-3'><strong>Collection Type:</strong> {productFormData.cargo_type}</h3>
                        <h3 className='text-lg xl:text-xl mb-3'><strong>Total Cost:</strong> {quotedPrice}</h3>
                    </div>
                    <div className='flex justify-center items-center gap-4 mt-5'>
                        <LinkButton link={'/book-shipment'} text={'Book a Shipment'} className={`w-full uppercase h-[50px] text-nowrap bg-[#333537] hover:text-[#f0b913] text-white`} />
                        <Button onClick={clearQuote} text='Get a new Quote' className={`w-full uppercase h-[50px] text-nowrap bg-[#333537] hover:text-[#f0b913]  text-white`} />
                    </div>
                </div>
            }
        </div>
    )
}

export default EstimateCalculator
