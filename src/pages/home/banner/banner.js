import React, { useState } from 'react';
import './banner.scss';
import CustomSelect from '../../../components/customSelect/customSelect';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../../components/buttons/button';
import TickBox from '../../../assets/images/tickBox';

const shippingArr = [
    {
        imgSrc: require('../../../assets/images/location.webp'),
        imgAlt: 'Shipping Location'
    },
    {
        imgSrc: require('../../../assets/images/horizontalDots.webp'),
        imgAlt: 'Yes Express'
    },
    {
        imgSrc: require('../../../assets/images/shipIcon.webp'),
        imgAlt: 'Sea Cargo'
    },
    {
        imgSrc: require('../../../assets/images/horizontalDots.webp'),
        imgAlt: 'Yes Express'
    },
    {
        imgSrc: require('../../../assets/images/truckIcon.webp'),
        imgAlt: 'Go to Destination'
    },
    {
        imgSrc: require('../../../assets/images/horizontalDots.webp'),
        imgAlt: 'Yes Express'
    },
    {
        imgSrc: require('../../../assets/images/destination.webp'),
        imgAlt: "Destination's Location"
    },
]
const Banner = () => {
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
        { value: '2', label: 'Land' },
    ];

    const originCountryOptions = [
        { value: 'selected-value', label: 'Select Origin Country' },
        { value: '1', label: 'Australia to Pakistan' },
        { value: '2', label: 'Pakistan to Australia' }
    ];

    return (
        <div className='py-[100px] bannerBg'>
            <div className='container'>
                <h1 className='h1 uppercase text-center'>RIGHT SHIPPING DECISIONS</h1>
                <h5 className='h5 text-center text-white'>Join thousands of businesses making the right shipping decisions with our all-in-one intelligent freight platform</h5>
                <div className='flex gap-3 justify-center mt-12 mb-14'>
                    <CustomSelect value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
                    <CustomSelect value={originCountry} onChange={handleOriginCountryChange} options={originCountryOptions} />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Weight' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Volumn' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Width' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Height' />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Shipment Date"
                        dateFormat="MM/dd/yyyy"
                        className='h-[40px] rounded-[3px] py-2 px-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] max-w-[140px] w-full'
                    />
                    
                    <Button className={`uppercase h-[40px] text-nowrap ${isBtnHover ? 'bg-[#fff] text-[#333537]' : 'bg-[#333537] text-white'}`} text='Get an Estimate' hasIcon={<TickBox className='w-[16px]' iconClr={isBtnHover ? '#333537' : '#fff'} />} onMouseEnter={() => setIsBtnHover(true)} onMouseLeave={() => setIsBtnHover(false)} />
                </div>

                <div className="flex justify-center gap-6">
                    {
                        shippingArr.map((shippingIcons, index) => (
                            <div key={index} className='h-[55px] w-fit flex flex-col justify-end'>
                                <img src={shippingIcons.imgSrc} alt={shippingIcons.imgAlt} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Banner;
