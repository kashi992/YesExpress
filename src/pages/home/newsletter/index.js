import React from 'react'
import './index.scss'
import CustomCheckbox from '../../../components/customCheckbox/customCheckBox';
import Button from '../../../components/buttons/button';

const Newsletter = () => {
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
                <h2 className='h2 secondaryClr text-center uppercase'><span className='primaryClr'>WE'RE </span>  WAITING FOR YOU</h2>
                <h6 className='text-[17.5px] text-center text-[#989EA6] mt-2 mb-11'>From booking to communications, to payment: FreightCo helps you transport freight faster, <br /> cheaper, safer, and easier, so you can stay focused on your business.</h6>
                <div className="flex gap-12 justify-between">
                    <div className='py-9 px-10 workingHrs min-w-[330px]'>
                        <h4 className='text-white text-[32px] font-semibold mb-4'>Working Hours</h4>
                        <ul>
                            <li>
                                <p className='fsSm text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>MON - SAT:</span> 7 am – 8 pm</p>
                                <p className='fsSm text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>SUN:</span> 9 am – 5 pm</p>
                                <p className='fsSm text-[#989ea6] flex items-center gap-[6px] fw600 mb-2 last-of-type:mb-0'><span className='uppercase text-white'>SUPPORT:</span> Every day, 24/7</p>
                            </li>
                        </ul>
                    </div>
                    <div className='py-9 px-10 workingHrs newsletter w-full'>
                        <h4 className='text-white text-[32px] font-semibold mb-4'><span className='secondaryClr'>Subscribe to Our</span>  Newsletter</h4>
                        <form action="" className='max-w-[510px] w-full'>
                            <input type="text" className='bg-white w-full py-[10px] px-5 rounded-[3px] mb-3' />
                            <CustomCheckbox id="agree" label="I have read and agree to the terms & conditions"/>
                            <Button text='Subscribe Now' className='uppercase bg-[#333537] text-white hover:text-[#333537] hover:bg-white'/>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Newsletter
