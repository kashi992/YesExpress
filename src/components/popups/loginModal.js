import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.scss'
import CustomInput from '../customInput/customInput';
import CustomCheckbox from '../customCheckbox/customCheckBox';
import Button from '../buttons/button';
import AuthContext from '../../services/context/AuthProvider';
import { loginUser } from '../../services/api/userAPI';
import Loader from '../loader';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, closeModal }) => {

    const {setAuth} = useContext(AuthContext)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [rememberLogin, setRememberLogin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
    
        const payload = {
          email: email,
          password: password,
        };
        try {
            if(email && password){
                const response = await loginUser(payload);
                // console.log(response)
                const isSuccess = response && response.status === 200;  
                let authToken = 0;  
                if(isSuccess){
                    authToken = 1;  
                    const userName = response?.data?.userData?.first_name +" "+ response?.data?.userData?.last_name 
                    const userId = response?.data?.userData?.id
                    setAuth({
                      email, 
                      authToken,
                      userName,
                      userId,
                    })
                    closeModal();
                }
                else{
                    setMessage('Invalid Details');
                }
            }
        } catch (error) {
          if(!error?.response){
            setMessage('No Server Response');
          }
          else if(error.response?.status === 400){
            setMessage('Mising User Email or Password');
          }
          else if(error.response?.status === 401){
            setMessage('Unauthorized');
          }
          else{
            setMessage('Login Failed');
          }
          console.error(error);
        }
        setLoading(false)
    };

    useEffect(()=>{
      localStorage.setItem('rememberLogin', rememberLogin)
    },[rememberLogin])

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[460px] z-20 secondaryBg px-6 pt-8 pb-12  shadow-lg shadow-black rounded-[5px]"
                contentLabel="Login Modal"
            >
                <div>
                <i className="fas fa-times text-white"></i>
                    <ul className="flex mb-6 items-center">
                        <li className='h5 uppercase border-r-[1px] border-white text-center w-2/4 text-white leading-none cursor-pointer'>Login</li>
                        <li className='h5 uppercase text-center w-2/4 text-white leading-none cursor-not-allowed'>Register</li>
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <CustomInput onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Login" className="text-black placeholder:text-black bg-white mb-3" />
                        <CustomInput onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Password" className="text-black placeholder:text-black bg-white mb-3" />
                        <div className="flex justify-between items-center">
                            <CustomCheckbox onChange={()=> setRememberLogin(!rememberLogin)} label="Remember me" id="login" />
                            <a className='fsSm text-[#f0b913] hover:text-white cursor-pointer'>Forgot password?</a>
                        </div>
                        <Button text="Login" className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:bg-white hover:text-[#333537]"/>
                        <p className='mt-3 text-[#f0b913] fsSm text-center'>{message}</p>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default LoginModal
