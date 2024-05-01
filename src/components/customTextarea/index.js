import React from 'react'

const CustomTextarea = ({placeholder,className}) => {
  return (
    <textarea className={`w-full rounded-[3px] p-4 fsSm bg-white text-[#333537] placeholder:text-[#333537] ${className}`} placeholder={placeholder} />
  )
}

export default CustomTextarea
