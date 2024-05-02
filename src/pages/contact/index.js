import React, { useState } from 'react';
import SmallBanner from '../../components/smallBanner';
import img from '../../assets/images/BannerBg.png';
import warehouseImg from '../../assets/images/warehouse.jpg'; // Renamed to avoid confusion with the imported 'addressImg'
import TitleBox from '../../components/titleBox';
import CustomInput from '../../components/customInput/customInput';
import CustomTextarea from '../../components/customTextarea';
import Button from '../../components/buttons/button';

const dataArr = [
    {
        title: "Address",
        img: warehouseImg,
        icon: <i class="fas fa-building"></i>,
        subArr: [
            {
                title2: "EUROPE:",
                title3: "9870 St Vincent Place, Glasgow",
                link: "",
            },
            {
                title2: "AMERICA:",
                title3: "641 Bay St Springfield, MA 01109",
                link: "",
            },
        ]
    },
    {
        title: "Get in Touch",
        img: warehouseImg,
        icon: <i class="fas fa-tty"></i>,
        subArr: [
            {
                title2: "PHONE:",
                title3: "+61 476 909 090",
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
        icon: <i class="far fa-clock"></i>,
        subArr: [
            {
                title2: "MON - SAT:",
                title3: "7 am – 8 pm",
                link: "",
            },
            {
                title2: "SUN:",
                title3: "9 am – 5 pm",
                link: "",
            },
            {
                title2: "SUPPORT:",
                title3: "Every day, 24/7",
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

    const setWidth = () => {
        return {
            width: 'calc(33.33% - 20px)',
            '@media screen and (maxWidth: 600px)': {
                width: '100%',
            }
        };
    };

    const inputWidth = () => {
        return {
            width: 'calc(50% - 6px)',
            '@media screen and (maxWidth: 600px)': {
                width: '100%',
            }
        };
    }


    return (
        <div>
            <SmallBanner title="CONTACTS" img={img} className="bg-bottom" />
            <div className="py-[100px]">
                <div className="container">
                    <div className="flex justify-between">
                        {
                            dataArr.map((data, index) => (
                                <div className='relative overflow-hidden p-7 z-10 before:-z-10 before:bg-[#333537] before:w-full before:h-full before:opacity-95 before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4' style={{ backgroundImage: `url(${data.img})`, ...(setWidth()) }} key={index}>
                                    <h2 className="text-[32px] font-semibold text-white mb-4">{data.title}</h2>
                                    {data.subArr.map((subData, subIndex) => (
                                        <a
                                            key={subIndex} href={subData.link ? subData.link : undefined}
                                            className={`fsSm block text-white mb-3 last-of-type:mb-0 max-w-[230px] w-full fw600`}
                                        >
                                            {subData.title2} <span className={`text-[#989ea6] ps-1 ${subData.link && hasLink ? 'hover:text-[#f0b913]' : ''}`}>{subData.title3}</span>
                                        </a>

                                    ))}
                                    <div className="absolute right-[-5%] bottom-[10px] primaryClr text-[100px]">
                                        {data.icon}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="pt-[100px]">
                        <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" title1="GET IN TOUCH" title2="WITH US" borderCss="primaryClrBg" className="text-center" />
                        <form action="" className='max-w-[750px] w-full mx-auto flex gap-y-3 flex-wrap justify-between'>
                            <div style={{ ...(inputWidth()) }}>
                                <CustomInput type="text" placeholder="Your Name" className="secondaryBg text-white placeholder:text-white" />
                            </div>
                            <div style={{ ...(inputWidth()) }}>
                                <CustomInput type="email" placeholder="Your Email" className="secondaryBg text-white placeholder:text-white" />
                            </div>
                            <CustomTextarea placeholder="Your Name" className="secondaryBg text-white placeholder:text-white h-[110px]" />
                            <Button text="Send your message " className="primaryClrBg uppercase text-white hover:text-[#333537] mt-4" />
                        </form>

                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.77688470006!2d144.95258587504196!3d-37.67795012628686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6500748e1c0ed%3A0x43e17fb118b860d8!2s1551%20State%20Route%2055%2C%20Campbellfield%20VIC%203061%2C%20Australia!5e0!3m2!1sen!2s!4v1714373505733!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

        </div>
    );
};

export default Contact;
