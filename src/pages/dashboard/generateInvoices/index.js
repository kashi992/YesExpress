import React from 'react'
import CustomSelect from '../../../components/customSelect/customSelect'
import Button from '../../../components/buttons/button';

const GenertateInvoices = () => {
    const ModeOptions = [
        { value: 'selected-value', label: 'Select Destination' },
        { value: '1', label: 'Australia to Pakistan' },
        { value: '2', label: 'Pakistan to Australia' },
    ];
  return (
    <div className='px-4 py-6 max-w-[550px] w-full'>
     <h1 className='fs40 font-semibold mb-4'>Generate your invoices</h1>
     <CustomSelect section="before:text-white mb-4" className="bg-[#333537] text-white " options={ModeOptions}/>
     <Button type="submit" text="Submit" className="bg-[#333537] border-[1px] border-[#333537] text-white hover:bg-transparent hover:text-[#333537]"/>
    </div>
  )
}

export default GenertateInvoices
