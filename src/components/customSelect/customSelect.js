import React from 'react';

const CustomSelect = ({ value, onChange, options }) => {
    return (
        <div className="custom-select-wrapper">
            <select
                value={value}
                onChange={onChange}
                className="bg-white text-[#333537] border-white rounded-[3px] h-[40px] py-2 px-6 fsSm"
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;
