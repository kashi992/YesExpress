import React from 'react'
import imgSrc from '../../assets/images/mainLogo.png'
import './footer.scss'
import { Link, useLocation } from 'react-router-dom'


const footerLiArr = [
    {
        link: '',
        linkTitle: 'Brokerage',
    },
    {
        link: '',
        linkTitle: 'Cargo Insurance',
    },
    {
        link: '',
        linkTitle: 'Forwarding',
    },
    {
        link: '',
        linkTitle: 'Logistics',
    },
    {
        link: '',
        linkTitle: 'Supply Chain',
    },
    {
        link: '',
        linkTitle: 'Warehousing',
    },
]
const footerLiArr2 = [
    {
        link: '',
        linkTitle: 'FAQ',
    },
    {
        link: '',
        linkTitle: 'Get a Quote',
    },
    {
        link: '',
        linkTitle: 'Our Benefits',
    },
    {
        link: '',
        linkTitle: 'Our Features',
    },
    {
        link: '',
        linkTitle: 'Our Services',
    },
    {
        link: '',
        linkTitle: 'Contacts',
    },
]
const footerLiArr3 = [
    {
        icon: <i className="fas fa-mobile-alt"></i>,
        link: 'tel:+61 476 909 090',
        linkTitle: '+61 476 909 090',
        target: '_blank',
    },
    {
        icon: <i className="far fa-envelope"></i>,
        link: 'mailto:yesexpress.mel@gmail.com',
        linkTitle: 'yesexpress.mel@gmail.com',
        target: '_blank',
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        link: 'https://maps.app.goo.gl/6SBt6gX1DZ6xUt687',
        linkTitle: '1551 State Route 55, Campbelfield VIC 3061',
        target: '_blank',
    },
]
const footerLiArr4 = [
    {
        link: '',
        linkTitle: 'Service',
    },
    {
        link: '',
        linkTitle: 'Get a Quote',
    },
    {
        link: '',
        linkTitle: 'Contacts',
    },
 
   
]

const Footer = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`secondaryBg md:py-[50px] py-[40px] ${location.pathname === "/dashboard" ? "hidden" : "block"}`}>
                <div className="container flex justify-between flex-wrap gap-y-4">
                    <div className='footerItem'>
                        <div className='w-[50px] mb-4'>
                        <Link to="/"><img src={imgSrc} alt="main Logo" /></Link> 
                        </div>
                        <p className='fs14 text-[#989ea6]'>
                            Join thousands of businesses making the right shipping decisions with our all-in-one intelligent freight platform. We help you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business.
                        </p>
                    </div>
                    <div className='footerItem'>
                        <h5 className='fs24 lg:mb-5 mb-3 primaryClr fw600'>Main Services</h5>
                        <ul>
                            {
                                footerLiArr.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} className='fs14 flex gap-3 items-center text-white leading-normal before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]'>
                                            {footerData.linkTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='footerItem'>
                        <h5 className='fs24 lg:mb-5 mb-3 primaryClr fw600'>Useful Links</h5>
                        <ul>
                            {
                                footerLiArr2.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} className='fs14 flex gap-3 items-center text-white leading-normal before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]'>{footerData.linkTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='footerItem'>
                        <h5 className='fs24 lg:mb-5 mb-3 primaryClr fw600'>Contacts</h5>
                        <ul>
                            {
                                footerLiArr3.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} target={footerData.target} className='fs14 flex gap-3 items-center text-white leading-normal'>
                                            {footerData.icon}
                                            {footerData.linkTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
            <div className="bg-[#262829]">
                <div className={`container flex md:justify-between justify-center lg:flex-nowrap flex-wrap items-center lg:gap-0 md:gap-y-3 gap-y-2  ${location.pathname === '/dashboard' ? 'h-[45px]' : 'min-[1370px]:h-[84px] lg:h-[55px] h-auto lg:py-0 py-3'}`}>
                    <p className='fs14 text-[#989ea6]'>YesExpress 2024. All Rights Reserved.</p>
                    <ul className='flex justify-end gap-8 items-center'>
                        {
                            footerLiArr4.map((footerData, index) => (
                                <li key={index}>
                                    <a href={footerData.link} className='fs14 flex gap-3 items-center text-[#989ea6] leading-normal'>
                                        {footerData.linkTitle}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <p className='fs14 text-[#989ea6] lg:w-fit w-full lg:text-start text-center'>Design and develop by <a href="https://pixelpacetechnologies.com/" target='_blank' className='text-[#f0b913] hover:text-white'>Pixel Pace Technologies</a></p>
                </div>
            </div>
        </div>

    )
}

export default Footer

