import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'

const LinkButton = ({ className, hasIcon, link, text, onMouseLeave, onMouseEnter }) => {

    return (
        <ScrollAnimation animateIn='fadeInUp'>
            <Link to={link} className={`${className}  w-fit md:px-5 md:py-3 px-3 py-2 rounded-[3px] fs14 font-semibold cursor-pointer flex justify-center items-center gap-[5px]`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {text}
                {hasIcon}
            </Link>
        </ScrollAnimation>

    )
}

export default LinkButton
