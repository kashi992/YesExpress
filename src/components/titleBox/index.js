import React from 'react'

const TitleBox = ({title1,title2,detail,border}) => {
    return (
        <div>
            <ul className='flex justify-center gap-2 mb-9'>
                <li className='h-[3px] w-[6px] primaryClrBg'></li>
                <li className='h-[3px] w-[6px] primaryClrBg'></li>
                <li className='h-[3px] w-[6px] primaryClrBg'></li>
                <li className='h-[3px] w-[6px] primaryClrBg'></li>
                <li className='h-[3px] w-[6px] primaryClrBg'></li>
            </ul>
            <h2 className='h2 secondaryClr text-center uppercase'><span className='primaryClr'>{title1} </span>  {title2}</h2>
            <h6 className='text-[17.5px] text-center text-[#989EA6] mt-2 mb-11 max-w-[750px] w-full mx-auto'>{detail} </h6>
        </div>
    )
}

export default TitleBox
