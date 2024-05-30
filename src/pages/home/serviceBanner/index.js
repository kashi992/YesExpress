import React, { useState } from 'react'
import './index.scss'
import TitleBox from '../../../components/titleBox';

const bannerArr = [
    {
        link: '',
        title: 'By Sea',
        detail: 'Sea container delivery was the first shipping...',
        img: require('../../../assets/images/BannerBg.png'),
        position: 'bottom',
    },
    {
        link: '',
        title: 'By Land',
        detail: 'Land container delivery was the first shipping...',
        img: require('../../../assets/images/truckImg.webp'),
        position: 'center',
    },
]
const ServiceBanner = () => {
    const [isHover, setIsHover] = useState(null);

    const mouseOver = (index) => {
        setIsHover(index);
    }

    const mouseLeave = () => {
        setIsHover(null);
    }

    return (
        <div className='py100'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1="Shipping" title2='to & from Anywhere' detail="From booking to communications, to payment: FreightCo helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business" />
                <div className="flex justify-center gap-6 mb-12">
                    {
                        bannerArr.map((bannerData, index) => (
                            <div key={index} className={`xl:py-9 xl:px-10 py-6 px-7 bannerBox w-full before:opacity-80 ${isHover === index ? 'before:bg-[#f0b913]' : 'before:bg-[#333537]'}`} onMouseEnter={()=> mouseOver(index)} onMouseLeave={mouseLeave} style={{ backgroundImage: `url(${bannerData.img})`, backgroundPosition: bannerData.position}}>
                                <h4 className='text-white fs32 font-semibold'>{bannerData.title}</h4>
                                <h5 className={`fs20 min-[1370px]:my-10 my-6 ${isHover === index ? 'text-white' : 'text-[#bac0c9]'}`}>{bannerData.detail}</h5>
                                <a href={bannerData.link} className='uppercase fs14 fw600 text-white flex items-center gap-2'>Read more <i className="fas fa-arrow-right text-[12px]"></i></a>
                            </div>
                        ))
                    }
                </div>
                <a href="" className='uppercase fs14 fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i className="fas fa-arrow-right text-[12px]"></i></a>
            </div>
        </div>
    )
}

export default ServiceBanner
