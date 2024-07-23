import React from 'react'
import imgSrc from '../../assets/images/mainLogo.png'
import './footer.scss'
import { Link, useLocation } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

// const footerLiArr = [
//     {
//         link: '',
//         linkTitle: 'Brokerage',
//     },
//     {
//         link: '',
//         linkTitle: 'Cargo Insurance',
//     },
//     {
//         link: '',
//         linkTitle: 'Forwarding',
//     },
//     {
//         link: '',
//         linkTitle: 'Logistics',
//     },
//     {
//         link: '',
//         linkTitle: 'Supply Chain',
//     },
//     {
//         link: '',
//         linkTitle: 'Warehousing',
//     },
// ]
const footerLiArr2 = [
    {
        link: '/faqs',
        linkTitle: 'FAQ',
    },
    {
        link: '/get-quote',
        linkTitle: 'Get a Quote',
    },
    {
        link: '/services',
        linkTitle: 'Our Services',
    },
    {
        link: '/contact',
        linkTitle: 'Contacts',
    },
]
const footerLiArr3 = [
    {
        icon: "fas fa-mobile-alt",
        link: 'tel:+61 476 909 090',
        linkTitle: '+61 476 909 090',
        link2: 'tel:+61 422 947 376 ',
        linkTitle2: '+61 422 947 376 ',
        target: '_blank',
    },
    {
        icon: "far fa-envelope",
        link: 'mailto:yesexpress.mel@gmail.com',
        linkTitle: 'yesexpress.mel@gmail.com',
        target: '_blank',
    },
    {
        icon: "fas fa-map-marker-alt",
        link: 'https://maps.app.goo.gl/6SBt6gX1DZ6xUt687',
        linkTitle: '1551 State Route 55, Campbelfield VIC 3061',
        target: '_blank',
    },
]

const Footer = () => {
    const location = useLocation();
    return (
        <div>
            <div className={`secondaryBg md:py-[50px] py-[40px] ${location.pathname === "/dashboard" ? "hidden" : "block"}`}>
                <div className="container flex justify-between gap-y-4 md:flex-nowrap gap-8 flex-wrap">
                    <ScrollAnimation animateIn='fadeInLeft' animateOnce={true} className='footerItem'>
                        <div className='w-[50px] mb-4'>
                            <Link to="/"><img src={imgSrc} alt="Yes Express Services | Reliable Shipment Company" /></Link>
                        </div>
                        <p className='fs14 text-[#989ea6]'>
                        Rely on YES EXPRESS SERVICES for expert shipping solutions that connect Australia and Pakistan. Our advanced logistics platform simplifies your freight process, enabling faster, more affordable, and secure transactions. Focus on your business goals while we efficiently manage the complexities of your international shipments.
                        </p>
                    </ScrollAnimation>
                    {/* <div className='footerItem'>
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

                    </div> */}
                    <ScrollAnimation animateIn='fadeInUp' animateOnce={true} className='footerItem'>
                        <h5 className='fs24 lg:mb-5 mb-3 primaryClr fw600'>Useful Links</h5>
                        <ul>
                            {
                                footerLiArr2.map((footerData, index) => (
                                    <li key={index}>
                                        <Link to={footerData.link} className='fs14 flex gap-3 items-center text-white leading-normal before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]'>{footerData.linkTitle}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeInRight' animateOnce={true} className='footerItem'>
                        <h5 className='fs24 lg:mb-5 mb-3 primaryClr fw600'>Contacts</h5>
                        {
                            footerLiArr3.map((footerData, index) => (
                                <div key={index} href={footerData.link} className='fs14 footerLink items-center text-white leading-normal'>
                                    <i className={`min-w-[14px] md:mt-1 mt-[6px] ${footerData.icon}`} style={{ gridArea: "a" }}></i>
                                    <a className='hover:text-[#f0b913]' href={footerData.link} target={footerData.target} style={{ gridArea: "b" }}>{footerData.linkTitle}</a>
                                    <a className='hover:text-[#f0b913]' target={footerData.target} href={footerData.link2} style={{ gridArea: "c" }}>{footerData.linkTitle2}</a>
                                </div>
                            ))
                        }

                    </ScrollAnimation>
                </div>
            </div>
            <div className="bg-[#262829]">
                <div className={`container flex md:justify-between justify-center lg:flex-nowrap flex-wrap items-center lg:gap-0 md:gap-y-3 gap-y-2  ${location.pathname === '/dashboard' ? 'h-[45px]' : 'min-[1370px]:h-[84px] lg:h-[55px] h-auto lg:py-0 py-3'}`}>
                    <p className='fs14 text-[#989ea6]'>YesExpress 2024. All Rights Reserved.</p>
                    <p className='fs14 text-[#989ea6] lg:w-fit w-full lg:text-start text-center'>Design and develop by <a href="https://pixelpacetechnologies.com/" target='_blank' className='text-[#f0b913] hover:text-white'>Pixel Pace Technologies</a></p>
                </div>
            </div>
        </div>

    )
}

export default Footer

