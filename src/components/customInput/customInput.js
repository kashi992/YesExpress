import React from 'react'

const CustomInput = ({name, placeholder,className,type, onChange, value}) => {
  return (
    <input type={type} name={name} onChange={onChange} value={value} className={`h-[40px] w-full rounded-[3px] py-2 px-4 fs14 bg-white text-[#333537] placeholder:text-[#333537] ${className}`} placeholder={placeholder} />
  )
}

export default CustomInput
