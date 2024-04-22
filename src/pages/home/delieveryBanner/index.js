import React from 'react'
import './index.scss'
const cargoItemsArr = [
    {
        imgSrc: <i class="fas fa-dolly-flatbed w-full h-full"></i>,
        imgAlt: 'Supplies',
        text: 'Supplies',
        detail: 'We provide the best shipping supplies on the market, all over the globe.',
    },
    {
        imgSrc: <i class="fas fa-people-carry w-full h-full"></i>,
        imgAlt: 'Moving',
        text: 'Moving',
        detail: 'The clients get 100% guarantee for the safest moving process.',
    },
    {
        imgSrc: <i class="fas fa-drumstick-bite w-full h-full"></i>,
        imgAlt: 'Foodstuffs',
        text: 'Foodstuffs',
        detail: 'Our company handles foodstuffs shipments easily and effectively.',
    },
    {
        imgSrc: <i class="fas fa-blender-phone w-full h-full"></i>,
        imgAlt: 'Appliances',
        text: 'Appliances',
        detail: 'We know how to make it in time and deliver the needed appliances.',
    },
    {
        imgSrc: <i class="fas fa-file-invoice w-full h-full"></i>,
        imgAlt: 'Docs & Cash',
        text: 'Docs & Cash',
        detail: 'We got your back while delivering important papers or money.',
    },
    {
        imgSrc: <i class="fas fa-horse w-full h-full"></i>,
        imgAlt: 'Animals',
        text: 'Animals',
        detail: 'We offer special service for pets and other animals delivery.',
    },
]
const DelieveryBanner = () => {
    return (
        <div className='pb-[100px]'>
            <div className="container">
                <ul className='flex justify-center gap-2 mb-9'>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                </ul>
                <h2 className='h2 secondaryClr text-center uppercase'><span className='primaryClr'>Deliever Anything </span>  ypu want</h2>
                <h6 className='text-[17.5px] text-center text-[#989EA6] mt-2 mb-11'>From booking to communications, to payment: Express Delivery helps you transport freight faster, <br /> cheaper, safer, and easier, so you can stay focused on your business</h6>
                <div className="flex flex-wrap justify-between gap-y-[50px] mb-[50px]">
                {
                    cargoItemsArr.map((cargoItem, index) => (
                        <div key={index} className='flex gap-6 items-center serviceBox'>
                            <div className='text-[50px] w-[52px] h-[52px] text-[#f0b913] opacity-90'>
                                {cargoItem.imgSrc}
                            </div>
                            <div>
                                <h4 className='text-[22px] text-[rgb(51,53,55)] mb-2 font-semibold'>
                                    {cargoItem.text}
                                </h4>
                                <p>{cargoItem.detail}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
               
                <a href="" className='uppercase fsSm fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i class="fas fa-arrow-right text-[12px]"></i></a>
            </div>
        </div>
    )
}

export default DelieveryBanner
