import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import CustomInput from '../../components/customInput/customInput'
import Button from '../../components/buttons/button'
import Loader from '../../components/loader';
import { resetPasword, verifyUserToken } from '../../services/api/userAPI'

const ResetPassword = () => {
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const { token } = useParams();
    const [isTokenValid, setIsTokenValid] = useState(false);
    const [tokenError, setTokenError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
          try {
            const response = await verifyUserToken(token);
            const isSuccess = response && response.status === 200;
            if(isSuccess){
                setIsTokenValid(true);
            }
          } catch (error) {
            setTokenError('Link is invalid or expired');
          }
          setLoading(false)
        };
    
        verifyToken();
    }, [token]);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        if(newPassword === confPassword){
            try {
                const response = await resetPasword(token, {newPassword});
                const isSuccess = response && response.status === 200;
                if(isSuccess){
                    setSuccessMessage('Password updated successfully');
                    setTimeout(() => {
                        navigate('/');
                    }, 1000);
                }
            } 
            catch (error) {
                console.error(error);
            }
        }
        else{
            setMessage('Passwords do not match!')
        }

    };

    if (tokenError) {
        return <div className='min-h-[30vh] text-center py-5 text-xl'>{tokenError}</div>;
    }

    return (
        <div>
            {loading ? <Loader type={'fixed'} /> : null}
            {isTokenValid ?  (
                <div className='p-4 pb-2 rounded-md border border-[#f0b913] max-w-[600px] w-[90%] mx-auto my-10'>
                    <h3 className='font-bold text-lg text-center mb-7'>Update your password</h3>
                    <form onSubmit={handlePasswordReset} className="active-content flex flex-col gap-2">
                        <CustomInput onChange={(e) => setNewPassword(e.target.value)} value={newPassword} name="newPassword" type="password" placeholder="Enter New Password" className="text-black placeholder:text-black bg-white mb-3 border" />
                        
                        <CustomInput onChange={(e) => setConfPassword(e.target.value)} value={confPassword} name="confirmPasword" type="password" placeholder="Confirm New Password" className="text-black placeholder:text-black bg-white mb-3 border" />

                        <Button text="Reset Password" className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:text-[#333537]"/>
                        <p className='mt-3 text-[#f0b913] fs14 text-center'>{message}</p>
                    </form>
                    {successMessage && (
                        <p className="font-semibold text-green-500 mb-5">
                            {successMessage}
                        </p>
                    )}
                </div>
            ) : (
                <div className='min-h-[40vh]'></div>
            )}
        </div>
    )
}

export default ResetPassword