import React from 'react'

const CustomInput = ({placeholder,className,type,style}) => {
  return (
    <input type={type} className={`h-[40px] w-full rounded-[3px] py-2 px-4 fsSm text-[#333537] placeholder:text-[#333537] ${className}`} placeholder={placeholder} />
  )
}

export default CustomInput
