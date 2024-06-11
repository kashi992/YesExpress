import React, { useEffect, useState, useContext } from 'react'
import LinkButton from '../../components/buttons/linkButton'
import image from '../../assets/images/client1.jpg'
import { getUserbyId } from '../../services/api/userAPI'
import AuthContext from '../../services/context/AuthProvider'
const Profile = () => {
    const [userData, setUserData] = useState('')
    const { auth } = useContext(AuthContext);

    useEffect(()=>{
        const getUserData = async ()=>{
            try {
                const payload = {
                    userId: auth.userId
                }
                const response = await getUserbyId(payload)
                if(response?.status === 200){
                    setUserData(response?.data?.userData)
                }
                
            } catch (error) {
                console.log(error)
            }
        }

        getUserData()
    })
    // useEffect(()=>{
    //     console.log(userData)
    // },[userData])

    return (
        <div className='pt-10 pb-12 bannerBg' style={{ backgroundPosition: 'bottom', height: 'auto' }}>
            <div className="container">
            <h2 className="fs30 font-bold uppercase text-[#333537] mb-2">Your Profile</h2>
                <div className="flex justify-between gap-5">
                    <div className="w-[30%] px-5 py-6 secondaryBg flex flex-col gap-4 rounded-[10px]">
                        <div className='max-w-[200px] w-full h-[200px] mx-auto'>
                            <img src={image} alt="profile image" className='rounded-full h-full object-cover' />
                        </div>
                        <h5 className="fs20 fw600 text-center text-white">{userData.name}</h5>
                        <LinkButton link={"/edit-profile"} text="Edit Profile" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913] mx-auto" hasIcon={ <i className="far fa-edit"></i>} />
                    </div>
                    <div className='flex flex-col gap-y-3 gap-x-4 flex-wrap secondaryBg w-[70%] px-5 py-6 rounded-[10px]'>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Name:</span>
                            <span className='font-medium text-white'>{userData.name}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'>Address Line 1:</span>
                            <span className='font-medium text-white'>{userData.address1}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Address Line 2: </span>
                            <span className='font-medium text-white'>{userData.address2}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'>City:</span>
                            <span className='font-medium text-white'>{userData.city}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> State:</span>
                            <span className='font-medium text-white'>{userData.state}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Postcode:</span>
                            <span className='font-medium text-white'>{userData.postcode}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Phone No. (Res):</span>
                            <span className='font-medium text-white'>{userData.phone}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Phone No. (Off):</span>
                            <span className='font-medium text-white'>{userData.phone2}</span>
                        </h6>
                        <h6 className='flex items-center gap-3 font-semibold'>
                            <span className='min-w-[150px] text-white'> Email:</span>
                            <span className='font-medium text-white'>{userData.email}</span>
                        </h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
