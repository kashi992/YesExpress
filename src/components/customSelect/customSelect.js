import React from 'react';

const CustomSelect = ({ value, onChange, options, className,section }) => {
    return (
        <div className={`relative before:content-[':'] before:right-[10px] before:top-[45%] before:-translate-y-2/4 before:absolute  ${section}`}>
            <select
                value={value}
                onChange={onChange}
                className={`rounded-[3px] h-[40px] py-2 px-6 fsSm appearance-none cursor-pointer w-full  ${className}`}
            >
                {options?.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;
