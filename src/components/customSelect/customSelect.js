import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { useInView } from 'react-intersection-observer';
const CustomSelect = ({ value, name, onChange, options, className, section }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
            <div animateIn='backInUp' animateOnce={true} className={`relative before:content-[':'] before:right-[10px] before:top-[45%] before:-translate-y-2/4 before:absolute  ${section}`}>
                
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
                </div>
                
    );
};

export default CustomSelect;
