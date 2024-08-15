import React from 'react'
import TitleBox from '../../../components/titleBox'
import "./index.scss"
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
const dataArr = [
    {
        title: "Victoria, Australia",
        boxLink: "https://maps.app.goo.gl/kGk2qgyZdAzxE4o27",
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.77688470006!2d144.95258587504196!3d-37.67795012628686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6500748e1c0ed%3A0x43e17fb118b860d8!2s1551%20State%20Route%2055%2C%20Campbellfield%20VIC%203061%2C%20Australia!5e0!3m2!1sen!2s!4v1718954575209!5m2!1sen!2s",
        phoneLink: "https://wa.me/0476909090",
        phone: "0476909090",
        address: "1551 State Route 55, Campbelfield VIC 3061",
        animate: "fadeInLeft",
    },
    {
        title: "Karachi, Pakistan",
        boxLink: "https://maps.app.goo.gl/rwZrqdbYFsNBoo899",
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3665112932063!2d67.17413507414321!3d24.91958124289164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339a1b5c91fb7%3A0xe46e7fef33fd3613!2sATAP%20City%20Society!5e0!3m2!1sen!2s!4v1718955387887!5m2!1sen!2s",
        phoneLink: "https://wa.me/+923273750719",
        phone: "+92-327-3750719",
        address: "R165 ATAP City, Near Gulshan e Roomi, Malir Cantt, Scheme 33, Karachi",
        animate: "fadeInRight",
    },
    {
        title: "Gujranwala, Pakistan",
        boxLink: "https://maps.app.goo.gl/XizzJqnze8fwHAjdA",
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.7346363553065!2d74.18545427445729!3d32.18442981403605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29967c13b1cf%3A0x5dc29dda096a8cd0!2sShamsi%20Chowk!5e0!3m2!1sen!2s!4v1718961356853!5m2!1sen!2s",
        phoneLink: "https://wa.me/+923000897890",
        phone: "+92-300-0897890",
        address: "Shamsi Chowk DC Road Gujranwala",
        animate: "fadeInLeft",
    },
    {
        title: "Lahore, Pakistan",
        boxLink: "https://maps.app.goo.gl/m72TPJX2BMjzA38T8",
        link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6806.484601809874!2d74.28565873971458!3d31.462520220845956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901595712025b%3A0x244e731d2ebe0561!2sBlock%20B2%20Block%20B%202%20Phase%201%20Johar%20Town%2C%20Lahore%2C%20Punjab%2054600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718961493760!5m2!1sen!2s",
        phoneLink: "https://wa.me/+923214160961",
        phone: "+92-321-4160961",
        address: "385 Block B2 Johar town Lahore",
        animate: "fadeInRight",
    },
]
const OurOffices = ({ className }) => {
    return (
        <div className={`${className}`}>
            <TitleBox title1="Our" title1Css="primaryClr text-center" title2Css="secondaryClr" title2="Offices" borderCss="primaryClrBg" borderWrap="justify-center" />
            <div className='flex justify-between flex-wrap gap-y-5'>
                {
                    dataArr.map((data, index) => (
                        <ScrollAnimation animateIn={data.animate} className='addressBox' key={index}>
                            <Link to={data.boxLink} target='_blank'>
                                <div className='h-[250px]'>
                                    <iframe src={data.link} width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                                <div className='border-[1px] border-t-0 border-[#f0b913] py-3 px-4'>
                                    <h3 className='fs24 secondaryClr font-semibold'>{data.title}</h3>
                                    <a className="inline-flex items-center leading-none secondaryClr gap-2 fs22 font-semibold my-2 numberRow" href={data.phoneLink} target='_blank'>
                                        <i class="fa-brands fa-whatsapp secondaryClr "></i>
                                        {data.phone}
                                    </a>
                                    <p className='fs15 max-[1470]:min-h-full md:min-h-[39px]'>
                                        <span className='font-bold'>Address:</span>  <span className='transition-all duration-300 hover:text-[#f0b913]'>{data.address}</span>
                                    </p>
                                </div>
                            </Link>
                        </ScrollAnimation>

                    ))
                }
            </div>

        </div>
    )
}

export default OurOffices
