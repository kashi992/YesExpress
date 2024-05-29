import React from 'react'
import './index.scss'
import CustomCheckbox from '../../../components/customCheckbox/customCheckBox';
import Button from '../../../components/buttons/button';
import TitleBox from '../../../components/titleBox';

const Newsletter = () => {
    return (
        <div className='pb-[100px]'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1="WE'RE" title2='WAITING FOR YOU' detail="From booking to communications, to payment: FreightCo helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business." />
                <div className="flex gap-4 justify-between">
                    <div className='flex items-center w-1/3 gap-4'>
                        <div className='fs50 w-[52px] h-[52px] text-[#f0b913] opacity-90'>
                            <i className="far fa-clock"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Working Hours</h4>
                            <p className='fs14 text-[#989ea6] flex items-center gap-[6px] mb-2 last-of-type:mb-0'><span className='uppercase text-[#989ea6] font-semibold'>MON - SAT:</span> 7 am – 8 pm</p>
                            <p className='fs14 text-[#989ea6] flex items-center gap-[6px] mb-2 last-of-type:mb-0'><span className='uppercase text-[#989ea6] font-semibold'>SUN:</span>  9.00 am – 5.00 pm</p>
                        </div>
                    </div>
                    <div className='flex items-center w-1/3 gap-4'>
                        <div className='fs50 w-[52px] h-[52px] text-[#f0b913] opacity-90'>
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Call Us Toll Free</h4>
                            <p className='fs14 text-[#989ea6] flex items-center gap-[6px] mb-2 last-of-type:mb-0'><a href='tel:+61 476 909 090' className='text-[#989ea6] hover:text-[#f0b913]'>+61 476 909 090 </a>  (Delivery Department) </p>
                        </div>
                    </div>
                    <div className='flex items-center w-1/3 gap-4'>
                        <div className='fs50 w-[52px] h-[52px] text-[#f0b913] opacity-90'>
                            <i className="fas fa-globe"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Main Office Address</h4>
                            <p className='fs14 text-[#989ea6] flex flex-col gap-[2px] mb-2 last-of-type:mb-0'><span className='uppercase text-[#989ea6] font-semibold block'>EMPIRE STATE BUILDING</span> 1551 State Route 55, Campbelfield VIC 3061</p>
                        </div>
                    </div>
                   
                </div>
                {/* <div className="flex gap-12 justify-between">
                    <div className='py-9 px-10 workingHrs min-w-[330px]'>
                        <h4 className='text-white fs32 font-semibold mb-4'>Working Hours</h4>
                        <ul>
                            <li>
                                <p className='fs14 text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>MON - SAT:</span> 7 am – 8 pm</p>
                                <p className='fs14 text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>SUN:</span> 9 am – 5 pm</p>
                                <p className='fs14 text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>SUPPORT:</span> Every day, 24/7</p>
                            </li>
                        </ul>
                    </div>
                    <div className='py-9 px-10 workingHrs newsletter w-full'>
                        <h4 className='text-white fs32 font-semibold mb-4'><span className='secondaryClr'>Subscribe to Our</span>  Newsletter</h4>
                        <form action="" className='max-w-[510px] w-full'>
                            <input type="text" className='bg-white w-full py-[10px] px-5 rounded-[3px] mb-3' />
                            <CustomCheckbox id="agree" label="I have read and agree to the terms & conditions" />
                            <Button text='Subscribe Now' className='uppercase bg-[#333537] text-white hover:text-[#333537] hover:bg-white' />
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Newsletter
