import React from 'react'
import TitleBox from '../../../components/titleBox'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
const cargoItemsArr = [
    {
        imgSrc: <i className="fas fa-dolly-flatbed w-full h-full"></i>,
        imgAlt: 'Supplies',
        text: 'Supplies',
        detail: 'Access a global network of shipping supplies ensuring your goods are packed securely and ready for any journey.',
        animate: "fadeInLeft",
    },
    {
        imgSrc: <i className="fas fa-people-carry w-full h-full"></i>,
        imgAlt: 'Moving',
        text: 'Moving',
        detail: 'Experience the safest and most efficient moving process with our expert handling and strategic logistics.',
        animate: "fadeInRight",
    },
    {
        imgSrc: <i className="fas fa-blender-phone w-full h-full"></i>,
        imgAlt: 'Appliances',
        text: 'Appliances',
        detail: 'Trust us to deliver your appliances on time and in good condition, whether it’s a fragile electronic or a large home appliance.',
        animate: "fadeInLeft",
    },
    {
        imgSrc: <i className="fas fa-file-invoice w-full h-full"></i>,
        imgAlt: 'Docs & Cash',
        text: 'Docs & Cash',
        detail: 'Our secure transport for documents and cash gives you the assurance that sensitive items are protected throughout their transit.',
        animate: "fadeInRight",
    },
]
const ServiceProvide = () => {
    return (
        <section className='py100'>
            <div className='container'>
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1='Services' title2='to Meet Your Unique Requirements' />
                <div className="blogWrap flex flex-wrap justify-between md:gap-y-[50px] gap-y-4 md:my-[50px] my-5">
                    {
                        cargoItemsArr.map((cargoItem, index) => (
                            <ScrollAnimation key={index} animateIn={cargoItem.animate} className='flex min-[1370px]:gap-6 gap-4 items-center serviceBox'>
                                <div className='lg:text-[50px] text-[40px] text-[#f0b913] opacity-90 lg:min-w-[62.5px] min-w-[50px] text-center'>
                                    {cargoItem.imgSrc}
                                </div>
                                <div>
                                    <h4 className='fs22  text-[rgb(51,53,55)] mb-2 font-semibold'>
                                        {cargoItem.text}
                                    </h4>
                                    <p>{cargoItem.detail}</p>
                                </div>
                            </ScrollAnimation>
                        ))
                    }
                </div>
                ,
                <ScrollAnimation animateIn="fadeInUp">
                <Link to="/services" className='uppercase fs14 fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i className="fas fa-arrow-right text-[12px]"></i></Link>
                </ScrollAnimation>
                
            </div>
        </section>
    )
}

export default ServiceProvide
