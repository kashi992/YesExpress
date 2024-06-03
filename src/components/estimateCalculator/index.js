import React, { useState } from 'react'
// import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from '../customSelect/customSelect'
import TickBox from '../../assets/images/tickBox'
import Button from '../buttons/button';
import CustomInput from '../customInput/customInput';
import { getQuote } from '../../services/api/invoiceApi';
import './index.scss'
const EstimateCalculator = () => {
    const [transportMode, setTransportMode] = useState('selected-value');
    const [originCountry, setOriginCountry] = useState('selected-value');
    // const [selectedDate, setSelectedDate] = useState(null);
    const [isBtnHover, setIsBtnHover] = useState(false);
    const [products, setProducts] = useState([])
    const [editProductIndex, setEditProductIndex] = useState()

    const handleTransportModeChange = (event) => {
        setTransportMode(event.target.value);
    };

    const handleOriginCountryChange = (event) => {
        setOriginCountry(event.target.value);
    };

    const transportModeOptions = [
        { value: 'selected-value', label: 'Select Transport Mode' },
        { value: '1', label: 'Sea' },
    ];

    const originCountryOptions = [
        { value: 'selected-value', label: 'Select Origin Country' },
        { value: '1', label: 'Australia to Pakistan' },
        { value: '2', label: 'Pakistan to Australia' }
    ];

    const [productFormData, setProductFormData] = useState({
        productDescription: '',
        goodsValue: '',
        boxWeight: '',
        length: '',
        width: '',
        height: ''
    });

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
    // const validateFormData = (formData) => {
    //     return Object.values(formData).every(value => value.trim() !== '');
    // };

    const getCustomQuote = async ()=>{
        console.log('Loading')
        const quotePayload = {
            "productData": 
            [
                {
                  "country": "pakistan",
                  "productName": "Smartphone",
                  "priceOfGoods": 500,
                  "boxWeight": 20,
                  "length": 15,
                  "width": 8,
                  "height": 5,
                  "cargo_type": "Dropoff",
                  "additionalCost": 20,
                  "comments": "Brand new smartphone with all accessories.",
                  "COD": 1
                }
            ]
        }
        console.log(JSON.stringify(products, null, 2));
        // try {
        //     const response = await getQuote(quotePayload);
        //     const isSuccess = response?.data?.status;
        //     if (isSuccess) {
        //         console.log(response)
        //     }
        // } catch (error) {
        //     console.error('An error occurred while fetching data: ', error);
        //     // setLoading(false)
        // }
        console.log('Loaded')
    }



    return (
        <div className='flex gap-y-3 justify-between flex-wrap calculatorWrap'>
            <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
            <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={originCountry} onChange={handleOriginCountryChange} options={originCountryOptions} />
            {/* <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' placeholder='Weight' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' placeholder='Volumn' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' placeholder='Width' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' placeholder='Height' />
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText="Shipment Date"
                dateFormat="MM/dd/yyyy"
                className='w-full h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'
            />
            */}
            <input placeholder='Product Name' name="productDescription" value={productFormData.productDescription} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' />
            <input placeholder='Goods Value' name="goodsValue" value={productFormData.goodsValue} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white' />
            <input placeholder="Box Weight (kg)" name="boxWeight" type="text" value={productFormData.boxWeight} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
            <input placeholder="Length (cm)" name="length" type="text" value={productFormData.length} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
            <input placeholder="Width (cm)" name="width" type="text" value={productFormData.width} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>
            <input placeholder="Height (cm)" name="height" type="text" value={productFormData.height} onChange={handleProductFormChange} className='w50_10 h-[40px] rounded-[3px] py-2 px-4 fs14 bg-[#262829] text-white placeholder:text-white'/>

            {editProductIndex >= 0 ? 
                <Button onClick={()=>saveEditedProduct(editProductIndex)} text="Save Product" className="secondaryBg text-white w-full formBtn" />
                :
                <Button onClick={handleAddProduct} text="Add Product" className="secondaryBg text-white w-full formBtn" />
            }
            <div className='mt-6 mb-14 bg-white rounded-[8px] w-full'>
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
                <Button onClick={getCustomQuote} className={`w-full uppercase h-[50px] text-nowrap bg-[#f0b913] ${isBtnHover ? 'text-[#333537]' : ' text-white'}`} isDisabled={!products.length} text='Get an Estimate' hasIcon={<TickBox className='w-[16px]' iconclr={isBtnHover ? '#333537' : '#fff'} />} onMouseEnter={() => setIsBtnHover(true)} onMouseLeave={() => setIsBtnHover(false)} />
            </div>
        </div>
    )
}

export default EstimateCalculator
