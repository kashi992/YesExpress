import React, { useState } from 'react'
import TitleBox from '../../../components/titleBox'
import './index.scss'
const dataArr = [
    {
        img: require('../../../assets/images/client1.jpg'),
        title: "Supply Chain",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
    },
    {
        img: require('../../../assets/images/client2.jpg'),
        title: "Warehousing",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
    },
    {
        img: require('../../../assets/images/client3.jpg'),
        title: "Logistics",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
    },
    {
        img: require('../../../assets/images/client4.jpg'),
        title: "Forwarding",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
    },
    {
        img: require('../../../assets/images/client5.jpg'),
        title: "Cargo Insurance",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
    },
    {
        img: require('../../../assets/images/client6.jpg'),
        title: "Brokerage",
        detail: "Freight shipping is an interesting process of transporting commodities, goods, and cargo by land, sea or air.",
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
        <div className='py-[100px]'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1="WHAT WE DO" title2="FOR OUR CLIENTS" detail="From booking to communications, to payment: FreightCo helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business" />
                <div className="flex justify-between gap-y-10 flex-wrap">
                    {
                        dataArr.map((data, index) => (
                            <div key={index} className='clientBox'>
                                <div className={`relative cursor-pointer before:transition-all before:duration-500 before:w-full before:h-full before:absolute ${isHover === index ? 'before:bg-[#333537] before:opacity-85' : 'before:bg-transparent before:opacity-0'}`} onMouseEnter={() => mouseEnter(index)} onMouseLeave={mouseLeave}>
                                    <img src={data.img} alt={data.alt} className='w-full h-full' />
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500 ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block ${isHover === index ? 'opacity-100 -ms-4' : 'opacity-0'}`}></span>
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500 ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block ${isHover === index ?  'opacity-100' : 'opacity-0'}`}></span>
                                    <span className={`w-[6px] h-[6px] rounded-full primaryClrBg transition-all duration-500  ease-in-out absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 inline-block  ${isHover === index ? 'opacity-100 ms-4' : 'opacity-0'}`}></span>
                                </div>
                                <div className="pt-3 px-8 text-center">
                                    <a className='block h5 mb-2 fw600 text-[#333537] hover:text-[#f0b913]'>{data.title}</a>
                                    <h5 className='fsSm text-[#989ea6]'>{data.detail}</h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurClients
