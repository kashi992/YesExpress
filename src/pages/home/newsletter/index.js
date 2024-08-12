import React from 'react'
import './index.scss'
import CustomCheckbox from '../../../components/customCheckbox/customCheckBox';
import Button from '../../../components/buttons/button';
import TitleBox from '../../../components/titleBox';
import ScrollAnimation from 'react-animate-on-scroll'

const Newsletter = () => {
    return (
        <div className='py100'>
            <div className="container">
            
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1=" Get in Touch," title2="We're Here to Help!" detail="Whether you're ready to book a shipment or just looking for more information, our dedicated team is on standby to ensure your shipping needs are met with the highest standards of service. Contact us during our extensive business hours, reach out through our direct lines, or visit our main office for personalized assistance." />
                <ScrollAnimation animateIn='backInUp' animateOnce={true} className="flex lg:gap-4 justify-between lg:flex-nowrap flex-wrap gap-y-4">
                    <div className='flex items-start lg:w-1/3 md:w-1/2 w-full min-[1370px]:gap-4 gap-3'>
                        <div className='fs50 text-[#f0b913] opacity-90'>
                            <i className="far fa-clock"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Working Hours</h4>
                            <div className='fs14 flex gap-[6px] mb-2 last-of-type:mb-0'>
                                <span className='uppercase text-[#989ea6] font-semibold'>MON - SAT:</span> 
                                <div>
                                    <span className='block text-[#989ea6]'>7 am – 8 pm (AEST) </span>
                                    <span className='block text-[#989ea6]'>7 am – 8 pm (PST) </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start lg:w-1/3 md:w-1/2 w-full min-[1370px]:gap-4 gap-3'>
                        <div className='fs50 text-[#f0b913] opacity-90'>
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Call Us</h4>
                            <p className='fs14 text-[#989ea6] flex gap-[6px] mb-2 last-of-type:mb-0'>
                                <div className='flex flex-col gap-2'>
                                    <a href='tel:+61 476 909 090' className='text-[#989ea6] hover:text-[#f0b913] block'>Muhammad Abdullah Assad: (Delivery Department) <br/> <i className="fas fa-phone text-[#f0b913] me-2"></i> +61 476 909 090 </a>
                                    <a href='tel:+61 422 947 376' className='text-[#989ea6] hover:text-[#f0b913] block'>Rana Noman Shahid:<br/> <i className="fas fa-phone text-[#f0b913] me-2"></i> +61 422 947 376 </a>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start lg:w-1/3 md:w-1/2 w-full min-[1370px]:gap-4 gap-3'>
                        <div className='fs50 text-[#f0b913] opacity-90'>
                            <i className="fas fa-globe"></i>
                        </div>
                        <div>
                            <h4 className='text-[#333537] fs24 font-semibold mb-[6px]'>Main Office Address</h4>
                            <a href="https://maps.app.goo.gl/6SBt6gX1DZ6xUt687" target='_blank' className='fs14 text-[#989ea6] flex flex-col gap-[2px] mb-2 last-of-type:mb-0 hover:text-[#f0b913]'>1551 State Route 55, Campbelfield VIC 3061</a>
                        </div>
                    </div>

                </ScrollAnimation>
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
