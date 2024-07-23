import React, { useState } from 'react'
import TitleBox from '../../../components/titleBox'
import './index.scss'
import ScrollAnimation from 'react-animate-on-scroll'
const dataArr = [
    {
        img: require('../../../assets/images/client1.jpg'),
        title: "Supply Chain",
        detail: "Revolutionize your supply chain with our expert solutions in transportation and logistics management. We ensure smooth operations so your business can thrive.",
        alt: "Supply Chain",
        animate: "fadeInLeft",
    },
    {
        img: require('../../../assets/images/client2.jpg'),
        title: "Warehousing",
        detail: "Secure, flexible warehousing solutions to keep your goods safe and operations efficient. Our facilities are equipped to handle any storage needs.",
        alt: "Warehousing",
        animate: "fadeInUp",
    },
    {
        img: require('../../../assets/images/client3.jpg'),
        title: "Logistics",
        detail: "Our logistics services provide the backbone for your supply chain with optimized routing, timely delivery, and cost-efficiency at the forefront of our operations.",
        alt: "Logistics",
        animate: "fadeInRight",
    },
    {
        img: require('../../../assets/images/client4.jpg'),
        title: "Forwarding",
        detail: "Navigate the complexities of global trade with our expert freight forwarding services. We handle all aspects of the shipment process, ensuring compliance and timely delivery.",
        alt: "Forwarding",
        animate: "fadeInLeft",
    },
    {
        img: require('../../../assets/images/client5.jpg'),
        title: "Cargo Insurance",
        detail: "Protect your investments with comprehensive cargo insurance. Our policies provide peace of mind and financial security against all transit risks.",
        alt: "Cargo Insurance",
        animate: "fadeInDown",
    },
    {
        img: require('../../../assets/images/client6.jpg'),
        title: "Brokerage",
        detail: "Leverage our customs brokerage services to streamline your imports and exports. Our experts ensure fast clearance and compliance with all regulatory requirements.",
        alt: "Brokerage",
        animate: "fadeInRight",
    },
]
const OurClients = () => {
    const [isHover, setIsHover] = useState(null);
    
    const mouseEnter = (index) => {
        setIsHover(index);
    }
    const mouseLeave = () => {
        setIsHover(null);
    }
    return (
        <div className='py100'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1="WHAT WE DO" title2="FOR OUR CLIENTS" detail="Our commitment extends beyond simple logistics. We're here to enhance your business operations through robust supply chain solutions, comprehensive warehousing services, expert forwarding, and strategic brokerage. Trust YES EXPRESS SERVICES to amplify your business efficiency with precision-focused logistics." />
                <div className="flex justify-between lg:gap-y-10 gap-y-6 flex-wrap">
                    {
                        dataArr.map((data, index) => (
                            <ScrollAnimation animateIn={data.animate} key={index} className='clientBox'>
                                <div className={`relative cursor-pointer before:transition-all before:duration-500 before:w-full before:h-full before:absolute ${isHover === index ? 'before:bg-[#333537] before:opacity-85' : 'before:bg-transparent before:opacity-0'}`} onMouseEnter={() => mouseEnter(index)} onMouseLeave={mouseLeave}>
                                    <img src={data.img} alt={data.alt} className='w-full h-full' />
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500 ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block ${isHover === index ? 'opacity-100 -ms-4' : 'opacity-0'}`}></span>
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500 ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block ${isHover === index ?  'opacity-100' : 'opacity-0'}`}></span>
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500  ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block  ${isHover === index ? 'opacity-100 ms-4' : 'opacity-0'}`}></span>
                                </div>
                                <div className="pt-3 px-8 text-center">
                                    <a className='block fs30 mb-2 fw600 text-[#333537] hover:text-[#f0b913]'>{data.title}</a>
                                    <h5 className='fs14 text-[#989ea6]'>{data.detail}</h5>
                                </div>
                            </ScrollAnimation>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurClients
