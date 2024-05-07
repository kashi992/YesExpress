import React from 'react'

const Button = ({ className,hasIcon,onClick,text,onMouseLeave,onMouseEnter,type}) => {

    return (
        <button type={type} onClick={onClick} className={`${className} w-fit px-5 py-3 rounded-[3px] text-[14px] font-semibold cursor-pointer flex justify-center items-center gap-[5px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {text}
            {hasIcon}
        </button>
    )
}

export default Button
