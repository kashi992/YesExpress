import React, { useState } from 'react';
import SmallBanner from '../../components/smallBanner';
import img from '../../assets/images/BannerBg.png';
import warehouseImg from '../../assets/images/warehouse.jpg'; // Renamed to avoid confusion with the imported 'addressImg'
import TitleBox from '../../components/titleBox';
import CustomInput from '../../components/customInput/customInput';
import CustomTextarea from '../../components/customTextarea';
import Button from '../../components/buttons/button';
import './index.scss'
import OurOffices from '../about/ourOffices';

const dataArr = [
    {
        title: "Address",
        img: warehouseImg,
        icon: <i className="fas fa-building"></i>,
        subArr: [
            {
                title2: "Australia:",
                title3: "1551 State Route 55, Campbelfield VIC 3061",
                link: "https://maps.app.goo.gl/BGixePdCbmbdL9BPA",
                target: "_blank",
            },
            {
                title2: "Karachi:",
                title3: "R165 ATAP City, Near Gulshan e Roomi, Malir Cantt, Scheme 33, Karachi",
                link: "https://maps.app.goo.gl/hkUNH5ZkxMFcyY7P9",
                target: "_blank",
            },
        ]
    },
    {
        title: "Get in Touch",
        img: warehouseImg,
        icon: <i className="fas fa-tty"></i>,
        subArr: [
            {
                title2: "PHONE:",
                title3: "+61 476 909 090",
                title4: "+61 422 947 376",
                link: "tel:+61 476 909 090",
            },
            {
                title2: "EMAIL:",
                title3: "yesexpress.mel@gmail.com",
                link: "mailto:yesexpress.mel@gmail.com",
            },
        ]
    },
    {
        title: "Working Hours",
        img: warehouseImg,
        icon: <i className="far fa-clock"></i>,
        subArr: [
            {
                title2: "MON - SAT:",
                title3: "7 am - 8 pm (AEST)",
                link: "",
            },
            {
                title2: "MON - SAT:",
                title3: "7 am - 8 pm (PST)",
                link: "",
            },
        ]
    },
];

const Contact = () => {
    const [hasLink, setHasLink] = useState(false);

    // Check if any subArr item has a non-empty link
    const checkHasLink = () => {
        for (const data of dataArr) {
            for (const subData of data.subArr) {
                if (subData.link) {
                    return true;
                }
            }
        }
        return false;
    };

    // Update hasLink state based on link presence
    if (!hasLink) {
        setHasLink(checkHasLink());
    }


    return (
        <div>
            <SmallBanner title="CONTACTS" img={img} className="bg-bottom" />
            <div className="py100">
                <div className="container">
                    <h2 className='fs40 text-center primaryClr lg:mb-4 mb-2'>Contact Information</h2>
                    <div className="flex justify-between flex-wrap lg:gap-0 gap-y-4">
                        {
                            dataArr.map((data, index) => (
                                <div className='setWidth relative overflow-hidden xl:p-6 p-4 z-10 before:-z-10 before:bg-[#333537] before:w-full before:h-full before:opacity-95 before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4' style={{ backgroundImage: `url(${data.img})`}} key={index}>
                                    <h2 className="fs32 font-semibold text-white mb-4">{data.title}</h2>
                                    {data.subArr.map((subData, subIndex) => (
                                        <a
                                            key={subIndex} href={subData.link ? subData.link : undefined}
                                            target={subData.target}
                                            className={`grid gap-1 fs14 text-white mb-3 last-of-type:mb-0 w-full fw600 xl:pr-10 pr-8`}
                                            style={{gridTemplateColumns: "max-content 1fr"}}
                                        >
                                            {subData.title2} 
                                            <div className='flex flex-col gap-1'>
                                            <span className={`text-[#989ea6] ${subData.link && hasLink ? 'hover:text-[#f0b913]' : ''}`}>{subData.title3}</span>
                                            
                                            <a href='tel:+61 422 947 376' className={`text-[#989ea6] hover:text-[#f0b913]`}>{subData.title4}</a>
                                            </div>
                                            
                                        </a>

                                    ))}
                                    <div className="absolute right-[-5%] bottom-[10px] primaryClr fs100">
                                        {data.icon}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* <div className="pt100">
                        <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" title1="GET IN TOUCH" title2="WITH US" borderCss="primaryClrBg" className="text-center" />
                        <form action="" className='max-w-[750px] w-full mx-auto flex gap-y-3 flex-wrap justify-between '>
                            <div className='inputWidth'>
                                <CustomInput type="text" placeholder="Your Name" className="secondaryBg text-white placeholder:text-white" />
                            </div>
                            <div className='inputWidth'>
                                <CustomInput type="email" placeholder="Your Email" className="secondaryBg text-white placeholder:text-white" />
                            </div>
                            <CustomTextarea placeholder="Your Name" className="secondaryBg text-white placeholder:text-white h-[110px]" />
                            <Button text="Send your message " className="primaryClrBg uppercase text-white hover:text-[#333537] mt-4" />
                        </form>

                    </div> */}
                    <OurOffices className="pt100"/>
                </div>
            </div>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.77688470006!2d144.95258587504196!3d-37.67795012628686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6500748e1c0ed%3A0x43e17fb118b860d8!2s1551%20State%20Route%2055%2C%20Campbellfield%20VIC%203061%2C%20Australia!5e0!3m2!1sen!2s!4v1714373505733!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
        </div>
    );
};

export default Contact;
