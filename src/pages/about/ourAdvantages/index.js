import React from 'react'
import TitleBox from '../../../components/titleBox'
const dataArr = [
    {
        img: <i className="fas fa-globe w-full h-full"></i>,
        imgAlt: 'Best Logistics',
        text: 'Best Logistics',
        detail: 'We provide the best logistic service on the market, all over the globe.',
    },
    {
        img: <i className="fas fa-shield-alt w-full h-full"></i>,
        imgAlt: 'Cargo security',
        text: 'Cargo security',
        detail: 'Our clients get 100% guarantee for secure shipping & handling.',
    },
    {
        img: <i className="fas fa-headset w-full h-full"></i>,
        imgAlt: '24-Hour Support',
        text: '24-Hour Support',
        detail: 'In case you have an enquiry, or an urgent question, our support is there.',
    },
    {
        img: <i className="fas fa-calendar-alt w-full h-full"></i>,
        imgAlt: 'On-Time Delivery',
        text: 'On-Time Delivery',
        detail: 'We know how to make it in time and set the right terms for deliveries.',
    },
    {
        img: <i className="fas fa-money-check-alt w-full h-full"></i>,
        imgAlt: 'Any Payment Method',
        text: 'Any Payment Method',
        detail: 'All payment methods are acceptable for ordering our services.',
    },
    {
        img: <i className="fas fa-search w-full h-full"></i>,
        imgAlt: 'Cargo Tracking',
        text: 'Cargo Tracking',
        detail: 'Track all your shipments online using the tracking form and ID.',
    },
]

const OurAdvantages = () => {

    const setWidth = () => {
        return {
            width: 'calc(33.33% - 20px)',
            '@media screen and (max-width: 600px)': {
                width: '100%',
            }
        };
    }
  return (
    <div className='py-[100px]'>
      <div className="container">
        <TitleBox className="text-center" title1="OUR" title1Css="secondaryClr" title2="ADVANTAGES" title2Css="primaryClr" borderCss="primaryClrBg" borderWrap="justify-center" detail="From booking to communications, to payment: FreightCo helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business"/>
        <div className="flex justify-between flex-wrap gap-y-6">
        {
            dataArr.map((data,index) => (
                <div key={index} className='flex gap-6 items-center' style={{...(setWidth())}}>
                <div className='text-[50px] w-[52px] h-[52px] text-[#f0b913] opacity-90'>
                    {data.img}
                </div>
                <div>
                    <h4 className='text-[22px] text-[rgb(51,53,55)] mb-2 font-semibold'>
                        {data.text}
                    </h4>
                    <p>{data.detail}</p>
                </div>
            </div>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default OurAdvantages
