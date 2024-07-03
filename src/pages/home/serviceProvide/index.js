import React from 'react'
import TitleBox from '../../../components/titleBox'
import { Link } from 'react-router-dom'
const cargoItemsArr = [
    {
        imgSrc: <i className="fas fa-dolly-flatbed w-full h-full"></i>,
        imgAlt: 'Supplies',
        text: 'Supplies',
        detail: 'We provide the best shipping supplies on the market, all over the globe.',
    },
    {
        imgSrc: <i className="fas fa-people-carry w-full h-full"></i>,
        imgAlt: 'Moving',
        text: 'Moving',
        detail: 'The clients get 100% guarantee for the safest moving process.',
    },
    {
        imgSrc: <i className="fas fa-blender-phone w-full h-full"></i>,
        imgAlt: 'Appliances',
        text: 'Appliances',
        detail: 'We know how to make it in time and deliver the needed appliances.',
    },
    {
        imgSrc: <i className="fas fa-file-invoice w-full h-full"></i>,
        imgAlt: 'Docs & Cash',
        text: 'Docs & Cash',
        detail: 'We got your back while delivering important papers or money.',
    },
]
const ServiceProvide = () => {
    return (
        <section className='py100'>
            <div className='container'>
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1='Services we' title2='provide' />
                <div className="blogWrap flex flex-wrap justify-between md:gap-y-[50px] gap-y-4 md:my-[50px] my-5">
                    {
                        cargoItemsArr.map((cargoItem, index) => (
                            <div key={index} className='flex min-[1370px]:gap-6 gap-4 items-center serviceBox'>
                                <div className='lg:text-[50px] text-[40px] text-[#f0b913] opacity-90 lg:min-w-[62.5px] min-w-[50px] text-center'>
                                    {cargoItem.imgSrc}
                                </div>
                                <div>
                                    <h4 className='fs22  text-[rgb(51,53,55)] mb-2 font-semibold'>
                                        {cargoItem.text}
                                    </h4>
                                    <p>{cargoItem.detail}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to="/services" className='uppercase fs14 fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i className="fas fa-arrow-right text-[12px]"></i></Link>
            </div>
        </section>
    )
}

export default ServiceProvide
