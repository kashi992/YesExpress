import React from 'react'
import './index.scss'

const ServiceBanner = () => {
    return (
        <div className='py-[100px]'>
            <div className="container">
                <ul className='flex justify-center gap-2 mb-9'>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                    <li className='h-[3px] w-[6px] primaryClrBg'></li>
                </ul>
                <h2 className='h2 secondaryClr text-center uppercase'><span className='primaryClr'>Shipping</span>  to & from Anywhere</h2>
                <h6 className='text-[17.5px] text-center text-[#989EA6] mt-2 mb-11'>From booking to communications, to payment: FreightCo helps you transport freight faster, <br /> cheaper, safer, and easier, so you can stay focused on your business</h6>
                <div className='py-9 px-10 serviceBanner mb-12'>
                    <h4 className='text-white text-[32px] font-semibold'>By Sea</h4>
                    <h5 className='h5 text-[#bac0c9] my-10'>Sea container delivery was the first shipping...</h5>
                    <a href="" className='uppercase fsSm fw600 text-white flex items-center gap-2'>Read more <i class="fas fa-arrow-right text-[12px]"></i></a>
                </div>
                <a href="" className='uppercase fsSm fw600 text-[#333537] flex items-center gap-2 justify-center hover:text-[#f0b913]'>View All Services <i class="fas fa-arrow-right text-[12px]"></i></a>
            </div>
        </div>
    )
}

export default ServiceBanner
