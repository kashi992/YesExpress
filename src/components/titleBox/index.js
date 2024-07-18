import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

const TitleBox = ({title1,title1Css,title2,title2Css,detail,borderCss,detailCss,className,borderWrap}) => {
    return (
        <div className={`${className}`}>
            <ScrollAnimation animateIn='fadeInDown'>
            <ul className={`flex gap-2 min-[1370px]:mb-8 mb-4 ${borderWrap}`}>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
            </ul>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft'>
                <h2 className={`fs50 uppercase lg:w-[80%] w-full mx-auto ${title1Css}`}><span className={`${title2Css}`}>{title1} </span>  {title2}</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInRight'>
                <h6 className={`fs17 text-[#989EA6] mt-2 md:mb-8 mb-6 lg:w-[80%] w-full mx-auto ${detailCss}`}>{detail} </h6>
                </ScrollAnimation>
            
        </div>
    )
}

export default TitleBox