import React from 'react'

const TitleBox = ({title1,title1Css,title2,title2Css,detail,borderCss,detailCss,className,borderWrap}) => {
    return (
        <div className={`${className}`}>
            <ul className={`flex gap-2 mb-8 ${borderWrap}`}>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
                <li className={`h-[3px] w-[6px] ${borderCss}`}></li>
            </ul>
            <h2 className={`h2 uppercase ${title1Css}`}><span className={`${title2Css}`}>{title1} </span>  {title2}</h2>
            <h6 className={`text-[17.5px] text-[#989EA6] mt-2 mb-11 max-w-[750px] w-full mx-auto ${detailCss}`}>{detail} </h6>
        </div>
    )
}

export default TitleBox