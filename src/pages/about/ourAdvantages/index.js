import React from 'react'
import TitleBox from '../../../components/titleBox'
const dataArr = [
    {
        img: <i className="fas fa-globe w-full h-full"></i>,
        imgAlt: 'Best Logistics',
        text: 'Best Logistics',
        detail: 'We offer the finest logistics services worldwide, combining cutting-edge technology to ensure that your shipments are handled with precision and care.',
    },
    {
        img: <i className="fas fa-shield-alt w-full h-full"></i>,
        imgAlt: 'Shipment security',
        text: 'Shipment security',
        detail: 'Our commitment to security is unwavering, providing a 100% guarantee for the safe and secure handling of your shipments. With rigorous security protocols and monitoring systems, we ensure your shipment is protected throughout its journey.',
    },
    {
        img: <i className="fas fa-headset w-full h-full"></i>,
        imgAlt: '24-Hour Support',
        text: '24-Hour Support',
        detail: 'Day or night, our dedicated support team is ready to assist you with any inquiries or urgent issues. Our 24-hour customer service ensures you always have access to expert help when you need it.',
    },
    {
        img: <i className="fas fa-calendar-alt w-full h-full"></i>,
        imgAlt: 'On-Time Delivery',
        text: 'On-Time Delivery',
        detail: 'Our commitment to punctuality ensures your shipments always arrive on schedule. We understand the importance of timely deliveries and set optimal terms to meet your deadlines every time.',
    },
    {
        img: <i className="fas fa-money-check-alt w-full h-full"></i>,
        imgAlt: 'Multiple Payment Method',
        text: 'Multiple Payment Method',
        detail: 'We accommodate all major payment methods, offering flexibility and convenience for our clients. Our streamlined payment process ensures easy and hassle-free transactions.',
    },
    {
        img: <i className="fas fa-search w-full h-full"></i>,
        imgAlt: 'Shipment Tracking',
        text: 'Shipment Tracking',
        detail: 'Stay updated with the status of your shipments through our advanced tracking system. Access real-time information using the provided tracking form and ID, giving you control and visibility over your logistics.',
    },
]

const OurAdvantages = () => {

  return (
    <div className='py100'>
      <div className="container">
        <TitleBox className="text-center" title1="OUR" title1Css="secondaryClr" title2="Competitive Advantages" title2Css="primaryClr" borderCss="primaryClrBg" borderWrap="justify-center" detail="At YES EXPRESS SERVICES, we pride ourselves on delivering unmatched service quality and logistical precision. Our competitive edge lies in our advanced technological integration and real-time tracking systems, ensuring that every shipment is monitored closely from start to finish."/>
        <div className="flex justify-between flex-wrap gap-y-6">
        {
            dataArr.map((data,index) => (
                <div key={index} className='flex gap-4 setWidth setWidth50'>
                <div className='lg:text-[50px] text-[40px] text-[#f0b913] opacity-90'>
                    {data.img}
                </div>
                <div>
                    <h4 className='fs22 text-[rgb(51,53,55)] mb-1 font-semibold'>
                        {data.text}
                    </h4>
                    <p className='fs15'>{data.detail}</p>
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
