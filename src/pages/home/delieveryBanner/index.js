import React from 'react'
import './index.scss'
import EstimateCalculator from '../../../components/estimateCalculator'
import TitleBox from '../../../components/titleBox'
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
        imgSrc: <i className="fas fa-drumstick-bite w-full h-full"></i>,
        imgAlt: 'Foodstuffs',
        text: 'Foodstuffs',
        detail: 'Our company handles foodstuffs shipments easily and effectively.',
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
    {
        imgSrc: <i className="fas fa-horse w-full h-full"></i>,
        imgAlt: 'Animals',
        text: 'Animals',
        detail: 'We offer special service for pets and other animals delivery.',
    },
]
const DelieveryBanner = () => {
    return (
        <div className='pb100'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1='Deliever Anything' title2='you want' detail="From booking to communications, to payment: Express Delivery helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business" />
                <EstimateCalculator />
                    <div className="blogWrap flex flex-wrap justify-between md:gap-y-[50px] gap-y-4 md:my-[50px] my-5">
                        {
                            cargoItemsArr.map((cargoItem, index) => (
                                <div key={index} className='flex min-[1370px]:gap-6 gap-4 items-center serviceBox'>
                                    <div className='lg:text-[50px] text-[40px] w-[52px] h-[52px] text-[#f0b913] opacity-90'>
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

                    <a href="" className='uppercase fs14 fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i className="fas fa-arrow-right text-[12px]"></i></a>
            </div>
        </div>
    )
}

export default DelieveryBanner
