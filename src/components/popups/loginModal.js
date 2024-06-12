import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.scss'
import CustomInput from '../customInput/customInput';
import CustomCheckbox from '../customCheckbox/customCheckBox';
import Button from '../buttons/button';
import AuthContext from '../../services/context/AuthProvider';
import { forgotPasword, loginUser, registerUser, sendEmailVerification, verifyEmailCode } from '../../services/api/userAPI';
import Loader from '../loader';
import PropTypes from 'prop-types';
import CustomSelect from '../customSelect/customSelect';
import './modal.scss';

Modal.setAppElement('#root')
const LoginModal = ({ isOpen, closeModal }) => {
  const {setAuth} = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberLogin, setRememberLogin] = useState(false);
  const [emailCode, setEmailCode] = useState('');


  LoginModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      closeModal: PropTypes.func.isRequired
  };

  const initialFormData = {
    name: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: ''
  };

  const initialErrors = {
    name: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: ''
  };
  const initialLoginErrors = {
    name: '',
    email: ''
  };

  const countryOptions = [
    { value: '', label: 'Country' },
    { value: 'australia', label: 'Australia' },
    { value: 'pakistan', label: 'Pakistan' }
  ];

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
  const [activeTab, setActiveTab] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateField = (fieldName, value) => {
      switch (fieldName) {
          case 'email':
              const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if(value.trim() === ''){
                return 'Email address required';
              }
              else if (!emailRegex.test(value)) {
                return 'Invalid email address';
              }
              return '';
          case 'password':
              if (value.trim() === '') {
                  return 'Password is required';
              } else if (value.length < 6 || value.length > 25) {
                  return 'Password must be between 6 and 25 characters';
              }
              return '';
          case 'country':
              if (value.trim() === '') {
                  return 'Country is required';
              }
              return '';
          case 'name':
              if (value.trim() === '') {
                  return 'Name is required';
              }
              return '';
          case 'confirmPassword':
              if (value.trim() === '') {
                  return 'Please confirm your password';
              } else if (value !== formData.password) {
                  return 'Passwords do not match';
              }
              return '';
          default:
              return '';
      }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    let newErrors = {};
    newErrors['email'] = validateField('email', email);
    newErrors['password'] = validateField('password', password);
    setLoginErrors(newErrors);
    if (Object.values(newErrors).every(error => error === '')){
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
                  authToken = response?.data?.token;  
                  const userName = response?.data?.userData?.name
                  const userId = response?.data?.userData?.id
                  setAuth({
                    email, 
                    authToken,
                    userName,
                    userId,
                  })
                  handleModalClose()
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
          setMessage('Invalid login details');
        }
        else{
          setMessage('Login Failed');
        }
        console.error(error);
      }
    }
    setLoading(false)
  };

  useEffect(()=>{
      localStorage.setItem('rememberLogin', rememberLogin)
  },[rememberLogin])

  const sendEmailCode = async (e) => {
      e.preventDefault();
      setLoading(true)
      let newErrors = {};
      Object.keys(formData).forEach(key => {
        newErrors[key] = validateField(key, formData[key]);
      });
      setErrors(newErrors);

      if (Object.values(newErrors).every(error => error === '')){
        if(formData.email){
          try {
            const payload = {
              email: formData.email
            }
            const response = await sendEmailVerification(payload)
            if(response.status === 200){
              setRegisterMessage('Verfication Code Sent to the Email');
              setActiveTab(2.1)
            }
          } catch (error) {
            if(!error?.response){
              setRegisterMessage('No Server Response');
            }
            else if(error.response?.status === 400){
              setRegisterMessage('Mising some details');
            }
            else if(error.response?.status === 409){
              setRegisterMessage(error.response?.data);
            }
            else{
              setRegisterMessage('Registration Failed');
              console.error(error);
            }
          }
        }

      //   const payload = {
      //     name: formData.name,
      //     email: formData.email,
      //     country: formData.country,
      //     password: formData.confirmPassword,
      //   };
      //   try {
      //       const response = await registerUser(payload);
      //       // console.log(response)
      //       const isSuccess = response && response.status === 201;  
      //       let authToken = 0;  
      //       if(isSuccess){
      //           authToken = response?.data?.token;  
      //           const userName = response?.data?.userData?.name
      //           const userId = response?.data?.userData?.id
      //           setAuth({
      //             email, 
      //             authToken,
      //             userName,
      //             userId,
      //           })
      //           setSuccessMessage("User successfully registered.")
      //           handleModalClose();
      //       }
      //   } catch (error) {
      //     if(!error?.response){
      //       setRegisterMessage('No Server Response');
      //     }
      //     else if(error.response?.status === 400){
      //       setRegisterMessage('Mising some details');
      //     }
      //     else if(error.response?.status === 409){
      //       setRegisterMessage(error.response?.data);
      //     }
      //     else{
      //       setRegisterMessage('Registration Failed');
      //       console.error(error);
      //     }
      //   }
      }
      setLoading(false)
  }

  const handleEmailCodeVerification = async (e) =>{
    e.preventDefault();
    setLoading(true)
    let newErrors = {};
      Object.keys(formData).forEach(key => {
        newErrors[key] = validateField(key, formData[key]);
      });
      setErrors(newErrors);

      if (Object.values(newErrors).every(error => error === '')){
        if(formData.email){
          try {
            const payload = {
              email: formData.email,
              code: emailCode
            }
            const response = await verifyEmailCode(payload)
            if(response.status === 200){
              setRegisterMessage('');
              handleRegistrationSubmit()
            }
            else{
              setRegisterMessage('Invalid code');
            }
          } catch (error) {
            if(!error?.response){
              setRegisterMessage('No Server Response');
            }
            else if(error.response?.status === 400){
              setRegisterMessage('Code is invalid or expired');
            }
            else if(error.response?.status === 409){
              setRegisterMessage(error.response?.data);
            }
            else{
              setRegisterMessage('Registration Failed');
              console.error(error);
            }
          }
        }

      //   const payload = {
      //     name: formData.name,
      //     email: formData.email,
      //     country: formData.country,
      //     password: formData.confirmPassword,
      //   };
      //   try {
      //       const response = await registerUser(payload);
      //       // console.log(response)
      //       const isSuccess = response && response.status === 201;  
      //       let authToken = 0;  
      //       if(isSuccess){
      //           authToken = response?.data?.token;  
      //           const userName = response?.data?.userData?.name
      //           const userId = response?.data?.userData?.id
      //           setAuth({
      //             email, 
      //             authToken,
      //             userName,
      //             userId,
      //           })
      //           setSuccessMessage("User successfully registered.")
      //           handleModalClose();
      //       }
      //   } catch (error) {
      //     if(!error?.response){
      //       setRegisterMessage('No Server Response');
      //     }
      //     else if(error.response?.status === 400){
      //       setRegisterMessage('Mising some details');
      //     }
      //     else if(error.response?.status === 409){
      //       setRegisterMessage(error.response?.data);
      //     }
      //     else{
      //       setRegisterMessage('Registration Failed');
      //       console.error(error);
      //     }
      //   }
      }
    setLoading(false)
  }

  const handleRegistrationSubmit = async () => {
    setLoading(true)
    let newErrors = {};
    Object.keys(formData).forEach(key => {
      newErrors[key] = validateField(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === '')){
      const payload = {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        password: formData.confirmPassword,
      };
      try {
          const response = await registerUser(payload);
          // console.log(response)
          const isSuccess = response && response.status === 201;  
          let authToken = 0;  
          if(isSuccess){
              authToken = response?.data?.token;  
              const userName = response?.data?.userData?.name
              const userId = response?.data?.userData?.id
              setAuth({
                email, 
                authToken,
                userName,
                userId,
              })
              setSuccessMessage("User successfully registered.")
              setActiveTab(2.2)
              setTimeout(() => {
                handleModalClose();
              }, 2000);
          }
      } catch (error) {
        if(!error?.response){
          setRegisterMessage('No Server Response');
        }
        else if(error.response?.status === 400){
          setRegisterMessage('Mising some details');
        }
        else if(error.response?.status === 409){
          setRegisterMessage(error.response?.data);
        }
        else{
          setRegisterMessage('Registration Failed');
          console.error(error);
        }
      }
    }
    setLoading(false)
    setTimeout(() => {
      setRegisterMessage('')
    }, 2000);
}

  const handleForgetPassword = async (e) => {
      e.preventDefault();
      setLoading(true)
      if (email){
        const payload = {
          email: email,
        };
        try {
          const response = await forgotPasword(payload);
          // console.log(response)
          const isSuccess = response && response.status === 200;  
          if(isSuccess){
            setEmail('')
            setSuccessMessage('Request submitted successfully. Check you email for the password reset link.')
          }
        } catch (error) {
          if(!error?.response){
            setMessage('No Server Response');
          }
          else if(error.response?.status === 400){
            setMessage('Mising User Email');
          }
          else{
            setMessage('Request submission failed');
          }
          console.error(error);
        }
      }
      setLoading(false)
  }

  const handleModalClose = () =>{
    setEmail('')
    setPassword('')
    setActiveTab(1)
    setFormData(initialFormData)
    closeModal();
  }
    

  return (
    <>
      {loading ? <Loader type={'fixed'} /> : null}
      <Modal isOpen={isOpen} onRequestClose={handleModalClose}
      className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 md:w-[460px] w-[95%] z-20 secondaryBg md:px-6 pt-8 pb-4 px-4  shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
      contentLabel="Login Modal">
          <div>
              <i className="fas fa-times text-white cursor-pointer absolute top-3 right-3 z-10" onClick={handleModalClose}></i>
              <ul className="flex mb-6 items-center">
                  <li className={`fs18 uppercase border-r-[1px] border-white text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 1 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(1)}>Login</li>
                  <li className={`fs18 uppercase text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 2 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(2)}>Register</li>
              </ul>
              {activeTab === 1 && (
                <form onSubmit={handleLoginSubmit} className="active-content flex flex-col gap-2">
                  <CustomInput onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Login" className="text-black placeholder:text-black bg-white mb-3" />
                  {loginErrors.email && <small className="text-red-500">{loginErrors.email}</small>}
                  
                  <CustomInput onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Password" className="text-black placeholder:text-black bg-white mb-3" />
                  {loginErrors.password && <small className="text-red-500">{loginErrors.password}</small>}

                  <div className="flex justify-between items-center">
                    <CustomCheckbox onChange={()=> setRememberLogin(!rememberLogin)} label="Remember me" id="login" />
                    <Button onClick={()=>setActiveTab(3)} text={'Forgot password?'} className='fs14 text-[#f0b913] hover:text-white cursor-pointer'/>
                  </div>
                  <Button text="Login" className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:bg-white hover:text-[#333537]"/>
                  <p className='mt-3 text-[#f0b913] fs14 text-center'>{message}</p>
                </form>
              )}
              {activeTab === 2 && (
                <form onSubmit={sendEmailCode} className="active-content flex flex-col gap-2">
                  <input type="text" name="name" placeholder="Your Name" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.name && 'border-red-500'}`} value={formData.name} onChange={handleChange} />
                  {errors.name && <small className="text-red-500">{errors.name}</small>}

                  <input type="text" name="email" placeholder="Email" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.email && 'border-red-500'}`} value={formData.email} onChange={handleChange} />
                  {errors.email && <small className="text-red-500">{errors.email}</small>}
                  
                  <CustomSelect className='text-white placeholder:text-white bg-[#262829]' section='w-full before:text-[#4b4c4e] hover:before:text-white' value={formData.country} name='country' onChange={handleChange} options={countryOptions} />
                  {errors.country && <small className="text-red-500">{errors.country}</small>}

                  <input type="password" name="password" placeholder="Password" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.password && 'border-red-500'}`} value={formData.password} onChange={handleChange} />
                  {errors.password && <small className="text-red-500">{errors.password}</small>}
                  
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.confirmPassword && 'border-red-500'}`} value={formData.confirmPassword} onChange={handleChange} />
                  {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}

                  <input type="submit" value="Register" className="px-5 py-3 rounded-[3px] fs14 font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>
                  <p className='mt-3 text-[#f0b913] fs14 text-center'>{registerMessage}</p>
                </form>
              )}
              {activeTab === 2.1 && (
                <>
                  <form onSubmit={handleEmailCodeVerification} className="active-content flex flex-col gap-2">
                    <h4 className='text-white mt-5 mb-3 text-sm text-center'>Enter verification code sent to {formData.email}</h4>
                    <input required type="text" name="email" placeholder="Verification Code" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.name && 'border-red-500'}`} value={emailCode} onChange={(event)=>setEmailCode(event.target.value)} />
                    <input type="submit" value="Verify Code" className="px-5 py-3 rounded-[3px] fs14 font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>
                    <p className='mt-3 text-[#f0b913] fs14 text-center'>{registerMessage}</p>
                  </form>
                  <div className='flex '>
                    <Button onClick={sendEmailCode} text={'Request a New Code'} className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:bg-white hover:text-[#333537]"/>
                  </div>
                </>
              )}
              {activeTab === 2.2 && (
                <div className='flex items-center py-3 justify-center gap-5 flex-col'>
                  <h4 className='text-white font-bold'>Code Verified</h4>
                  <div className='w-[120px] h-[120px] bg-[#f0b913] rounded-full flex items-center justify-center'>
                    <i className='fas fa-check text-5xl text-white'></i>
                  </div>
                  <p className='text-white'>User Registered Successfully</p>
                </div>
              )}
              {activeTab === 3 && (
                <form onSubmit={handleForgetPassword} className="active-content flex flex-col gap-2">
                  <h4 className='text-white mt-5 mb-3 text-sm text-center'>Enter your registered email to reset your password</h4>
                  <input type="text" name="email" placeholder="Your Registered Email" className={`h-[40px] rounded-[3px] py-2 px-4 fs14 w-full text-white placeholder:text-white bg-[#262829] ${errors.name && 'border-red-500'}`} value={email} onChange={(event)=>setEmail(event.target.value)} />
                  {errors.name && <small className="text-red-500">{errors.name}</small>}

                  <input type="submit" value="Submit Request" className="px-5 py-3 rounded-[3px] fs14 font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>
                  <p className='mt-3 text-[#f0b913] fs14 text-center'>{registerMessage}</p>
                </form>
              )}
              {successMessage && (activeTab === 2 || activeTab === 3) && (
                <p className="font-semibold text-green-500 mb-5">
                    {successMessage}
                </p>
              )}
          </div>
      </Modal>
    </>
  );
};


export default LoginModal;
