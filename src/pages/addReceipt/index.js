import React, { useState } from 'react'
import CustomInput from '../../components/customInput/customInput'
import './index.scss'
import Button from '../../components/buttons/button'
import CustomSelect from '../../components/customSelect/customSelect'
const AddReceipt = () => {
    const [transportMode, setTransportMode] = useState('selected-value');
    const [enabled, setEnabled] = useState(false);

    const handleTransportModeChange = (event) => {
        setTransportMode(event.target.value);
    };
    const transportModeOptions = [
        { value: 'selected-value', label: 'Delivery Type' },
        { value: '1', label: 'Drop-off' },
        { value: '2', label: 'Collection' },
    ];

    return (
        <div className='primaryClrBg py-[60px]'>
            <div className="container">
                <h2 className='h2 secondaryClr'>Add Receipt</h2>
                <h5 className='h5'>Receiver Information</h5>
                <form action="" className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                    <CustomInput placeholder="Name" type="text" />
                    <CustomInput placeholder="Address Line 1" type="text" />
                    <CustomInput placeholder="Address Line 2" type="text" />
                    <CustomInput placeholder="Enter Subrub/Town" type="text" />
                    <CustomInput placeholder="State" type="text" />
                    <CustomInput placeholder="Postcode" type="text" />
                    <CustomInput placeholder="Phone No. (Res)" type="text" />
                    <CustomInput placeholder="Phone No. (Off)" type="text" />
                    <CustomInput placeholder="Email" type="email" />
                    <Button text="Next" className="secondaryBg text-white w-full formBtn" />
                </form>
                <h5 className='h5 mt-4'>Sender Information</h5>
                <form action="" className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                    <CustomInput placeholder="Name" type="text" />
                    <CustomInput placeholder="Address" type="text" />
                    <CustomInput placeholder="District" type="text" />
                    <CustomInput placeholder="City" type="text" />
                    <CustomInput placeholder="State" type="text" />
                    <CustomInput placeholder="Postcode" type="text" />
                    <CustomInput placeholder="Phone No. (Res)" type="text" />
                    <CustomInput placeholder="Phone No. (Off)" type="text" />
                    <CustomInput placeholder="Email" type="email" />
                    <Button text="Next" className="secondaryBg text-white w-full formBtn" />
                </form>
                <h5 className='h5 mt-4'>Product Description</h5>
                <form action="" className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                    <textarea placeholder='Product Description' className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' name="" id="" cols="30" rows="10"></textarea>
                    <CustomInput placeholder="Goods value" type="text" />
                    <CustomInput placeholder="Box Weight (kg)" type="text" />
                    <CustomInput placeholder="Length (cm)" type="text" />
                    <CustomInput placeholder="Width (cm)" type="text" />
                    <CustomInput placeholder="Height (cm)" type="text" />
                    <div className='relative'>
                        <a className='flex_align w-[40px] h-[40px] rounded-[5px] shadow text-[20px] bg-white'><i className="fas fa-file-upload"></i></a>
                        <input type="file" className='cursor-pointer absolute opacity-0 w-full h-full top-0 z-10' style={{ width: "100%" }} />
                    </div>
                    <Button text="Add Product" className="secondaryBg text-white w-full formBtn" />
                </form>
                <h5 className='h5 mt-4'>Delivery Info</h5>
                <form action="" className='flex justify-between flex-wrap ReceiptForm gap-y-4 mt-4'>
                    <div className="flex justify-between items-center w-full">
                        <h6 className='h6 fw600'>Cash on Delivery</h6>
                        <button
                        type="button"
                        onClick={() => setEnabled(!enabled)}
                        className={`${enabled ? 'bg-blue-600' : 'bg-gray-600'}      relative inline-flex items-center h-6 rounded-full w-11`}
                    >
                        <span
                            className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition`}
                        />
                    </button>
                    </div>
                    <CustomSelect className='bg-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
                    <CustomInput placeholder="Additional Cost (if any)" type="text" />
                    <textarea placeholder='Comments' className='h-[150px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] w-full' name="" id="" cols="30" rows="10"></textarea>
                    <Button text="Next" className="secondaryBg text-white w-full formBtn" />
                </form>
            </div>
        </div>
    )
}

export default AddReceipt
