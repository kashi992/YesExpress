import React from 'react'

const Button = ({ className,hasIcon,onClick,text,onMouseLeave,onMouseEnter,type, isDisabled}) => {

    return (
        <button disabled={isDisabled} type={type} onClick={onClick} className={`${className} disabled:opacity-75 w-fit md:px-4 px-3 py-2 leading-normal rounded-[3px] fs14 font-semibold disabled:cursor-not-allowed cursor-pointer flex justify-center items-center gap-[5px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {text}
            {hasIcon}
        </button>
    )
}

export default Button
