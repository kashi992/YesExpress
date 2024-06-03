import React from 'react'

const LinkButton = ({ className,hasIcon,link,text,onMouseLeave,onMouseEnter}) => {

    return (
        <a href={link} className={`${className} w-fit md:px-5 md:py-3 px-3 py-2 rounded-[3px] fs14 font-semibold cursor-pointer flex justify-center items-center gap-[5px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {text}
            {hasIcon}
        </a>
    )
}

export default LinkButton
