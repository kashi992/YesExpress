import React, { useState } from 'react'
import './index.scss'
import TitleBox from '../../../components/titleBox';
import { Link, useLocation } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const bannerArr = [
    {
        title: 'Comprehensive Sea Freight Solutions',
        detail: 'Specializing in sea freight, YES EXPRESS SERVICES provides dependable container shipping solutions connecting Australia and Pakistan. Our sea freight services are designed to handle bulk goods efficiently, ensuring cost-effective rates without compromising on safety or timelines.',
        img: require('../../../assets/images/BannerBg.png'),
        position: 'bottom',
    },
    // {
    //     link: '',
    //     title: 'By Land',
    //     detail: 'Land container delivery was the first shipping...',
    //     img: require('../../../assets/images/truckImg.webp'),
    //     position: 'center',
    // },
]
const ServiceBanner = () => {
    const [isHover, setIsHover] = useState(null);

    const mouseOver = (index) => {
        setIsHover(index);
    }

    const mouseLeave = () => {
        setIsHover(null);
    }
    const location = useLocation();

    return (
        <div className='py100'>
            <div className="container">
            
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1="Reliable Sea Freight Services" title2='to and from Australia and Pakistan' detail="From small packages to large cargoes, YES EXPRESS SERVICES offers comprehensive shipping solutions by sea and air. Our expertly coordinated logistics ensure your shipments move smoothly between Australia and Pakistan, with full regulatory compliance and real-time tracking for peace of mind." />
                <ScrollAnimation animateIn='fadeInUp'>
                <div className="flex justify-center md:gap-6 gap-4 md:mb-8 mb-4 md:flex-nowrap flex-wrap">
                    {
                        bannerArr.map((bannerData, index) => (
                            <div key={index} className={`xl:py-9 xl:px-10 py-6 px-7 bannerBox before:opacity-80 xl:w-3/4 w-full mx-auto ${isHover === index ? 'before:bg-[#f0b913]' : 'before:bg-[#333537]'}`} onMouseEnter={()=> mouseOver(index)} onMouseLeave={mouseLeave} style={{ backgroundImage: `url(${bannerData.img})`, backgroundPosition: bannerData.position}}>
                                <h4 className='text-white fs32 font-semibold'>{bannerData.title}</h4>
                                <h5 className={`fs20 min-[1370px]:my-10 min[1370px]:my-6 my-4 ${isHover === index ? 'text-white' : 'text-[#bac0c9]'}`}>{bannerData.detail}</h5>
                            </div>
                        ))
                    }
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp'>
                <Link to="/services" className={`uppercase fs14 fw600 text-[#333537]  items-center gap-2 justify-center hover:text-[#f0b913] ${location.pathname === "/services" ? 'hidden' : 'flex'}`}>View All Services <i className="fas fa-arrow-right text-[12px]"></i></Link>
                </ScrollAnimation>
                
            </div>
        </div>
    )
}

export default ServiceBanner
