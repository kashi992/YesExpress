import React from 'react'
import { useInView } from 'react-intersection-observer';

const TitleBox = ({ title1, title1Css, title2, title2Css, detail, borderCss, detailCss, className, borderWrap }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });
    return (
        <div ref={ref} className={`${className}`}>
            <ul  className={`flex gap-2 min-[1370px]:mb-8 mb-4 ${borderWrap} ${inView ? 'animate__animated animate__backInUp' : ''}`}>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
            </ul>
            <h2 className={`fs50 uppercase lg:w-[80%] w-full mx-auto ${title1Css} ${inView ? 'animate__animated animate__backInLeft' : ''}`}><span className={`${title2Css}`}>{title1} </span>  {title2}</h2>
            <h6 className={`fs17 text-[#989EA6] mt-2 md:mb-8 mb-6 lg:w-[80%] w-full mx-auto ${detailCss} ${inView ? 'animate__animated animate__backInRight' : ''}`}>{detail} </h6>
        </div>
    )
}

export default TitleBox