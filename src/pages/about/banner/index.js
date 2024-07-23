import React from 'react'
import TitleBox from '../../../components/titleBox/index'
import aboutImg from '../../../assets/images/aboutUs.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

const AboutBanner = () => {
    return (
        <div className='py100'>
            <div className="container flex justify-between items-center flex-wrap lg:gap-0 gap-y-4">
                <div className="lg:w-1/2 w-full xl:pr-10 md:pr-4">
                <TitleBox title1Css="secondaryClr lg:w-full" title2Css="primaryClr" borderWrap="justify-start" title1="WELCOME to" title2="YES EXPRESS SERVICES" borderCss="primaryClrBg" className="text-start" detail="Welcome to YES EXPRESS SERVICES, where reliability meets convenience in freight transportation. We specialize in streamlined shipping solutions that cover both air and sea routes between Australia and Pakistan. Our deep understanding of logistics, rooted in decades of industry experience, ensures that your goods are transported efficiently and safely, from origin to destination." detailCss="lg:w-full fs16" />
                </div>
                <ScrollAnimation animateIn='fadeInRight' animateOnce={true} className="lg:w-1/2 w-full">
                <img src={aboutImg} alt="Yes Express Services" className='w-full' />
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default AboutBanner
