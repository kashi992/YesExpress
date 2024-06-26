import React from 'react'

const TitleBox = ({title1,title1Css,title2,title2Css,detail,borderCss,detailCss,className,borderWrap}) => {
    return (
        <div className={`${className}`}>
            <ul className={`flex gap-2 min-[1370px]:mb-8 mb-5 ${borderWrap}`}>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
            </ul>
            <h2 className={`fs50 uppercase ${title1Css}`}><span className={`${title2Css}`}>{title1} </span>  {title2}</h2>
            <h6 className={`fs17 text-[#989EA6] mt-2 md:mb-11 mb-6 max-w-[750px] w-full mx-auto ${detailCss}`}>{detail} </h6>
        </div>
    )
}

export default TitleBox