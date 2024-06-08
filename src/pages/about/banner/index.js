import React from 'react'
import TitleBox from '../../../components/titleBox/index'
import aboutImg from '../../../assets/images/aboutUs.jpg'

const AboutBanner = () => {
    return (
        <div className='py100'>
            <div className="container flex justify-between items-center flex-wrap lg:gap-0 gap-y-4">
                <div className="lg:w-1/2 w-full xl:pr-[120px] pr-6">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-start" title1="WELCOME" title2="TO THE BEST COMPANY " borderCss="primaryClrBg" className="text-start" detailCss="hidden" />
                <ul className='mt-4'>
                    <li className='fs14 text-[#989ea6] mb-3 last-of-type:mb-0'>
                        Freight transport is the physical process of transporting commodities and merchandise goods and cargo. The term shipping originally referred to transport by sea, but is extended in English to refer to transport by land or air.
                    </li>
                    <li className='fs14 text-[#989ea6] mb-3 last-of-type:mb-0'>
                        “Logistics”, a term borrowed from the military environment, is also fashionably used in the same sense. In air and sea shipments, ground transport is required to take the cargo from its place of origin.
                    </li>
                </ul>
                </div>
                <div className="lg:w-1/2 w-full">
                <img src={aboutImg} alt="" className='w-full' />
                </div>
                
            </div>
        </div>
    )
}

export default AboutBanner
