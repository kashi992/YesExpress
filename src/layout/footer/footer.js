import React from 'react'
import imgSrc from '../../assets/images/mainLogo.png'
import './footer.scss'
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
    return (
        <div>
            <div className='secondaryBg py-[50px]'>
                <div className="container flex justify-between">
                    <div className='footerItem'>
                        <div className='w-[50px] mb-4'>
                            <img src={imgSrc} alt="main Logo" />
                        </div>
                        <p className='fsSm text-[#989ea6]'>
                            Join thousands of businesses making the right shipping decisions with our all-in-one intelligent freight platform. We help you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business.
                        </p>
                    </div>
                    <div className='footerItem'>
                        <h5 className='text-[24px] mb-5 primaryClr fw600'>Main Services</h5>
                        <ul>
                            {
                                footerLiArr.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} className='fsSm flex gap-3 items-center text-white leading-normal before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]'>
                                            {footerData.linkTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='footerItem'>
                        <h5 className='text-[24px] mb-5 primaryClr fw600'>Useful Links</h5>
                        <ul>
                            {
                                footerLiArr2.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} className='fsSm flex gap-3 items-center text-white leading-normal before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]'>{footerData.linkTitle}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>
                    <div className='footerItem'>
                        <h5 className='text-[24px] mb-5 primaryClr fw600'>Contacts</h5>
                        <ul>
                            {
                                footerLiArr3.map((footerData, index) => (
                                    <li key={index}>
                                        <a href={footerData.link} target={footerData.target} className='fsSm flex gap-3 items-center text-white leading-normal'>
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
                <div className="container flex justify-between items-center h-[84px]">
                    <p className='fsSm text-[#989ea6]'>YesExpress 2024. All Rights Reserved.</p>
                    <ul className='flex justify-end gap-8 items-center'>
                        {
                            footerLiArr4.map((footerData, index) => (
                                <li key={index}>
                                    <a href={footerData.link} className='fsSm flex gap-3 items-center text-[#989ea6] leading-normal'>
                                        {footerData.linkTitle}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <p className='fsSm text-[#989ea6]'>Design and develop by <a href="https://pixelpacetechnologies.com/" target='_blank' className='hover:text-[#f0b913]'>Pixel Pace Technologies</a></p>
                </div>
            </div>
        </div>

    )
}

export default Footer
