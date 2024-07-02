import React, {useEffect, useState, useContext} from 'react'
import LinkButton from '../../components/buttons/linkButton'
import Button from '../../components/buttons/button'
import image from '../../assets/images/client1.jpg'
import CustomInput from '../../components/customInput/customInput'
import { getUserbyId } from '../../services/api/userAPI'
import { editUserProfile } from '../../services/api/userAPI'
import Loader from '../../components/loader'
import AuthContext from '../../services/context/AuthProvider'
import './index.scss'
const EditProfile = () => {
    const [userData, setUserData] = useState('')
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const { auth } = useContext(AuthContext);
    const [userFormData, setUserFormData] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        postcode: '',
        phone1: '',
        phone2: '',
        email: ''
    })
    const currentUserId = auth.userId;

    useEffect(()=>{
        const getUserData = async ()=>{
            try {
                const payload = {
                    userId: currentUserId
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

    const handleChange = e => {
        const { name, value } = e.target;
        setUserFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSaveProfile = async (e)=>{
        e.preventDefault()
        setLoading(true)
        const payload = {
            userId: currentUserId,
            name: userFormData.name ? userFormData.name : userData.name,
            phone: userFormData.phone1 ? userFormData.phone1 : userData.phone1,
            phone2: userFormData.phone2 ? userFormData.phone2 : userData.phone2,
            email: userFormData.email ? userFormData.email : userData.email,
            city: userFormData.city ? userFormData.city : userData.city,
            state: userFormData.state ? userFormData.state : userData.state,
            country: userFormData.country ? userFormData.country : userData.country,
            postcode: userFormData.postcode ? userFormData.postcode : userData.postcode,
            address1: userFormData.address1 ? userFormData.address1 : userData.address1,
            address2: userFormData.address2 ? userFormData.address2 : userData.address2,
        }

        try {
            const response = await editUserProfile(payload);
            const isSuccess = response && response.status === 200; 
            if(isSuccess){
                setMessage('')
                setSuccessMessage('Profile Updated Sucessfully')
                setTimeout(()=>{
                    setSuccessMessage('')
                }, 2000)
            } 
        } catch (error) {
          if(!error?.response){
            setMessage('No Server Response');
          }
          else if(error.response?.status === 409){
            setMessage(error.response?.data);
          }
          else{
            setMessage('Profile Update Failed');
            console.error(error);
          }
        }
        setLoading(false)
    }

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            <div className='pt-10 pb-12 bannerBg' style={{ backgroundPosition: 'bottom', height: 'auto' }}>
                <div className="container">
                    <h2 className="fs30 font-bold uppercase text-[#333537] mb-2">Edit your Profile</h2>
                    <div className="flex justify-between gap-5 items-start">
                        <div className="w-[30%] px-5 py-6 secondaryBg flex flex-col gap-4 rounded-[10px]">
                            <div className='max-w-[200px] w-full h-[200px] mx-auto profileImg rounded-full'>
                                <img src={image} alt="profile image" className='rounded-full h-full object-cover' />
                                <i className="far fa-edit"></i>
                                <input type="file" />
                            </div>
                            <h5 className="fs20 fw600 text-center text-white">{userData?.name}</h5>
                            <LinkButton link={'/profile'} text="View Profile" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913] mx-auto" hasIcon={ <i className="far fa-eye"></i>} />
                        </div>
                        <form onSubmit={handleSaveProfile} className='flex flex-col gap-3 flex-wrap secondaryBg w-[70%] px-5 py-6 rounded-[10px]'>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Name:</span>
                                <CustomInput onChange={handleChange} name='name' value={userFormData.name ? userFormData.name : userData.name ? userData.name : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'>Address Line 1:</span>
                                <CustomInput onChange={handleChange} name='address1' value={userFormData.address1 ? userFormData.address1 : userData.address1 ? userData.address1 : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Address Line 2: </span>
                                <CustomInput onChange={handleChange} name='address2' value={userFormData.address2 ? userFormData.address2 : userData.address2 ? userData.address2 : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'>City:</span>
                                <CustomInput onChange={handleChange} name='city' value={userFormData.city ? userFormData.city : userData.city ? userData.city : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> State:</span>
                                <CustomInput onChange={handleChange} name='state' value={userFormData.state ? userFormData.state : userData.state ? userData.state : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Country:</span>
                                <CustomInput onChange={handleChange} name='country' value={userFormData.country ? userFormData.country : userData.country ? userData.country : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Postcode:</span>
                                <CustomInput onChange={handleChange} name='postcode' value={userFormData.postcode ? userFormData.postcode : userData.postcode ? userData.postcode : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Phone No. (Res):</span>
                                <CustomInput onChange={handleChange} name='phone1' value={userFormData.phone1 ? userFormData.phone1 : userData.phone1 ? userData.phone1 : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Phone No. (Off):</span>
                                <CustomInput onChange={handleChange} name='phone2' value={userFormData.phone2 ? userFormData.phone2 : userData.phone2 ? userData.phone2 : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className='flex items-center gap-3 font-semibold'>
                                <span className='min-w-[150px] text-white'> Email:</span>
                                <CustomInput onChange={handleChange} name='email' value={userFormData.email ? userFormData.email : userData.email ? userData.email : ''} type="text" className="border-[1px] border-[#333537]"/>
                            </div>
                            <div className="flex gap-3 justify-end w-full mt-3">
                                <LinkButton link={'/profile'} text="Cancel" className="bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913]" hasIcon={<i className="far fa-save"></i>} />
                                <input type="submit" value="Save Profile" className="w-fit px-5 py-3 rounded-[3px] fs14 bg-[#f0b913] text-[#333537] font-semibold hover:bg-white hover:text-[#f0b913]"/>
                            </div>
                            {message && 
                                <p className='mt-3 text-[#f0b913] fs14 text-center'>{message}</p>
                            }
                            {successMessage && (
                                <p className="font-medium text-green-500 mb-5 text-center">
                                    {successMessage}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default EditProfile
