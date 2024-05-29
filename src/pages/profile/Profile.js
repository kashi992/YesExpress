import React from 'react'
import LinkButton from '../../components/buttons/linkButton'
import { Link } from 'react-router-dom'
import image from '../../assets/images/client1.jpg'
const Profile = () => {
    return (
        <div className='pt-10 pb-12 bannerBg' style={{ backgroundPosition: 'bottom', height: 'auto' }}>
            <div className="container">
            <h2 class="fs30 font-bold uppercase text-[#333537] mb-2">Your Profile</h2>
                <div className="flex justify-between gap-5 items-start">
                    <div className="w-[30%] px-5 py-6 secondaryBg flex flex-col gap-4 rounded-[10px]">
                        <div className='max-w-[200px] w-full h-[200px] mx-auto'>
                            <img src={image} alt="profile image" className='rounded-full h-full object-cover' />
                        </div>
                        <h5 class="fs20 fw600 text-center text-white">Sohaib Anwar</h5>
                        <Link to="/edit-profile">
                        <LinkButton text="Edit Profile" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913] mx-auto" hasIcon={ <i class="far fa-edit"></i>} />
                    </Link>
                    </div>
                    <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap secondaryBg w-[70%] px-5 py-6 rounded-[10px]'>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Name:</span>
                            <span className='font-medium text-white'>Sohaib Anwar</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'>Address Line 1:</span>
                            <span className='font-medium text-white'>Lahore</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Address Line 2: </span>
                            <span className='font-medium text-white'>Lahore</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'>City:</span>
                            <span className='font-medium text-white'>Lahore</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> State:</span>
                            <span className='font-medium text-white'>Punjab</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Postcode:</span>
                            <span className='font-medium text-white'>61061</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Phone No. (Res):</span>
                            <span className='font-medium text-white'>+92-42-3770885</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Phone No. (Off):</span>
                            <span className='font-medium text-white'>+92-302-5915878</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Email:</span>
                            <span className='font-medium text-white'>sohaib@gmail.com</span>
                        </h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
