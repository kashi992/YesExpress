import React from 'react';

const CustomCheckbox = ({ id, label }) => {
    return (
        <div className="block mb-4">
            <input type="checkbox" id={id} className="sr-only peer " />
            <label htmlFor={id} className="fsSm text-white flex items-center relative cursor-pointer before:content-[''] before:appearance-none before:bg-transparent before:border-[1px] before:border-[#eee] before:rounded-[3px] before:shadow before:w-[13px] before:h-[13px] before:inline-block before:mr-1.5 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:absolute peer-checked:after:top-[3px] peer-checked:after:left-[5px] peer-checked:after:w-[4px] peer-checked:after:h-[9px] peer-checked:after:border-white peer-checked:after:border-[2px] peer-checked:after:border-t-0 peer-checked:after:border-l-0 peer-checked:after:rotate-45">
                {label}
            </label>
        </div>
    );
};

export default CustomCheckbox;


