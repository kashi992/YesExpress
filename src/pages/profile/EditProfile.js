import React from 'react'
import LinkButton from '../../components/buttons/linkButton'
import image from '../../assets/images/client1.jpg'
import { Link } from 'react-router-dom'
import CustomInput from '../../components/customInput/customInput'
import './index.scss'
const EditProfile = () => {
    return (
        <div className='pt-10 pb-12 bannerBg' style={{ backgroundPosition: 'bottom', height: 'auto' }}>
        <div className="container">
        <h2 class="fs30 font-bold uppercase text-[#333537] mb-2">Edit your Profile</h2>
            <div className="flex justify-between gap-5 items-start">
                <div className="w-[30%] px-5 py-6 secondaryBg flex flex-col gap-4 rounded-[10px]">
                    <div className='max-w-[200px] w-full h-[200px] mx-auto profileImg rounded-full'>
                        <img src={image} alt="profile image" className='rounded-full h-full object-cover' />
                        <i class="far fa-edit"></i>
                        <input type="file" />
                    </div>
                    <h5 class="fs20 fw600 text-center text-white">Sohaib Anwar</h5>
                    <Link to="/profile">
                    <LinkButton text="View Profile" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913] mx-auto" hasIcon={ <i class="far fa-eye"></i>} />
                </Link>
                </div>
                <form className='flex flex-col gap-3 flex-wrap secondaryBg w-[70%] px-5 py-6 rounded-[10px]'>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Name:</span>
                       <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'>Address Line 1:</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Address Line 2: </span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'>City:</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> State:</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Postcode:</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Phone No. (Res):</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Phone No. (Off):</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <div className='flex items-center gap-3 font-semibold'>
                        <span className='min-w-[150px] text-white'> Email:</span>
                        <CustomInput type="text" className="border-[1px] border-[#333537]"/>
                    </div>
                    <LinkButton text="Save" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913] ms-auto" hasIcon={<i class="far fa-save"></i>} />
                </form>
            </div>
        </div>

    </div>
    )
}

export default EditProfile
