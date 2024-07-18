import React, { useState } from 'react';
import './banner.scss';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../../../components/buttons/button';
import { useNavigate } from 'react-router-dom';
import { trackInvoice } from '../../../services/api/invoiceApi';
import ScrollAnimation from 'react-animate-on-scroll';
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
        imgSrc: require('../../../assets/images/truckIcon.webp'),
        imgAlt: 'Go to Destination'
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
    // const [transportMode, setTransportMode] = useState('selected-value');
    // const [originCountry, setOriginCountry] = useState('selected-value');
    // const [selectedDate, setSelectedDate] = useState(null);
    const [isBtnHover, setIsBtnHover] = useState(false);

    // const handleTransportModeChange = (event) => {
    //     setTransportMode(event.target.value);
    // };

    // const handleOriginCountryChange = (event) => {
    //     setOriginCountry(event.target.value);
    // };

    // const transportModeOptions = [
    //     { value: 'selected-value', label: 'Select Transport Mode' },
    //     { value: '1', label: 'Sea' },
    //     { value: '2', label: 'Land' },
    // ];

    // const originCountryOptions = [
    //     { value: 'selected-value', label: 'Select Origin Country' },
    //     { value: '1', label: 'Australia to Pakistan' },
    //     { value: '2', label: 'Pakistan to Australia' }
    // ];

    const [invoiceId, setInvoiceId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const searchInvoice = async () => {
        if (invoiceId) {
            let formatedInvoiceId = invoiceId.length > 4 ? invoiceId.substring(4) : ''
            setErrorMessage('')
            const trackPayload = {
                "invoiceId": formatedInvoiceId,
            }
            try {
                const response = await trackInvoice(trackPayload);
                const isSuccess = response?.data?.status;
                if (isSuccess) {
                    navigate(`/track-shipment/${invoiceId}`);
                }
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('No invoice exist for the given id');
                } else {
                    console.error('An error occurred while fetching data: ', error);
                }
            }
        }
        else {
            setErrorMessage('Enter an Invoice ID first')
        }
    }

    return (
        <div className='bannerBg bg-bottom'>
            <div className='container flex flex-col justify-center h-full'>
            <h1 className='fs70 uppercase text-center text-[#333537] mb-2 leading-tight md:w-[80%] mx-auto w-full'>Reliable Shipping Solutions Between Australia and Pakistan</h1>
            <p className='fs20 text-center text-white lg:w-[80%] mx-auto w-full'>At YES EXPRESS SERVICES, we specialize in bridging the distance between Australia and Pakistan with top-tier, reliable shipping solutions. Our commitment to speed, security, and service excellence ensures that whether you are sending personal belongings or managing commercial shipments, your goods arrive on time and in perfect condition.</p>
                <ScrollAnimation animateIn='fadeInUpBig' animateOnce={true}>
                    <div className='flex gap-3 justify-center mt-7 max-w-[600px] w-full mx-auto'>
                        <input type="text" onInput={(event) => setInvoiceId(event.target.value)} className='h-[40px] w-full rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Insert Tracking Number Here' />



                        <Button onClick={searchInvoice} className={`uppercase h-[40px] text-nowrap ${isBtnHover ? 'bg-[#fff] text-[#333537]' : 'bg-[#333537] text-white'}`} text='Track It' hasIcon={<i className='fas fa-search w-[16px]' iconclr={isBtnHover ? '#333537' : '#fff'} />} onMouseEnter={() => setIsBtnHover(true)} onMouseLeave={() => setIsBtnHover(false)} />
                    </div>
                    <p className='text-red-700 mt-2 text-left text-lg font-medium max-w-[600px] w-full mx-auto'>{errorMessage}</p>
                </ScrollAnimation>

                {/* <div className='flex gap-3 justify-center mt-12 mb-14'>
                    <CustomSelect value={transportMode} onChange={handleTransportModeChange} options={transportModeOptions} />
                    <CustomSelect value={originCountry} onChange={handleOriginCountryChange} options={originCountryOptions} />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Weight' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Volumn' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Width' />
                    <input type="text" className='h-[40px] w-[90px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537]' placeholder='Height' />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        placeholderText="Shipment Date"
                        dateFormat="MM/dd/yyyy"
                        className='h-[40px] rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537] max-w-[140px] w-full'
                    />
                    
                    <Button className={`uppercase h-[40px] text-nowrap ${isBtnHover ? 'bg-[#fff] text-[#333537]' : 'bg-[#333537] text-white'}`} text='Get an Estimate' hasIcon={<TickBox className='w-[16px]' iconclr={isBtnHover ? '#333537' : '#fff'} />} onMouseEnter={() => setIsBtnHover(true)} onMouseLeave={() => setIsBtnHover(false)} />
                </div> */}
                <ScrollAnimation animateIn='fadeInLeftBig' animateOnce={true}>
                    <div className="flex justify-center md:gap-6 md:mt-7 mt-5 md:flex-nowrap flex-wrap gap-2">
                        {
                            shippingArr.map((shippingIcons, index) => (
                                <div key={index} className='md:h-[55px] h-auto w-fit flex flex-col justify-end'>
                                    <img src={shippingIcons.imgSrc} alt={shippingIcons.imgAlt} className='md:w-auto w-[30px]' />
                                </div>
                            ))
                        }
                    </div>
                </ScrollAnimation>


            </div>
        </div>
    );
};

export default Banner;
