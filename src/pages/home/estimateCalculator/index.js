import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import CustomSelect from '../../../components/customSelect/customSelect'
import TickBox from '../../../assets/images/tickBox'
import Button from '../../../components/buttons/button';
import './index.scss'
const EstimateCalculator = () => {
    const [transportMode, setTransportMode] = useState('selected-value');
    const [originCountry, setOriginCountry] = useState('selected-value');
    const [selectedDate, setSelectedDate] = useState(null);
    const [isBtnHover, setIsBtnHover] = useState(false);

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
    return (
        <div className='flex gap-y-3 justify-between flex-wrap calculatorWrap'>
            <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
            <CustomSelect className='bg-[#262829] text-white' section='w50_10 before:text-[#4b4c4e] hover:before:text-white' value={originCountry} onChange={handleOriginCountryChange} options={originCountryOptions} />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-[#262829] text-white placeholder:text-white' placeholder='Weight' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-[#262829] text-white placeholder:text-white' placeholder='Volumn' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-[#262829] text-white placeholder:text-white' placeholder='Width' />
            <input type="text" className='w50_10 h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-[#262829] text-white placeholder:text-white' placeholder='Height' />
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText="Shipment Date"
                dateFormat="MM/dd/yyyy"
                className='w-full h-[40px] rounded-[3px] py-2 px-4 fsSm bg-[#262829] text-white placeholder:text-white'
            />
            <Button className={`w50_10 uppercase h-[40px] text-nowrap bg-[#f0b913] ${isBtnHover ? 'text-[#333537]' : ' text-white'}`} text='Get an Estimate' hasIcon={<TickBox className='w-[16px]' iconClr={isBtnHover ? '#333537' : '#fff'} />} onMouseEnter={() => setIsBtnHover(true)} onMouseLeave={() => setIsBtnHover(false)} />
        </div>
    )
}

export default EstimateCalculator
