import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const CustomSelect = ({ value, name, onChange, options, className, section }) => {
    return (
            <ScrollAnimation animateIn='fadeInUp' className={`relative before:content-[':'] before:right-[10px] before:top-[45%] before:-translate-y-2/4 before:absolute  ${section}`}>
                
                <select
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={`rounded-[3px] h-[40px] py-2 px-4 fs14 appearance-none cursor-pointer w-full  ${className}`}
                >
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                </ScrollAnimation>
                
    );
};

export default CustomSelect;
