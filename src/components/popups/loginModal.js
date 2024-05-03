import React, { useState, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import './modal.scss'
import CustomInput from '../customInput/customInput';
import CustomCheckbox from '../customCheckbox/customCheckBox';
import Button from '../buttons/button';
import AuthContext from '../../services/context/AuthProvider';
import { loginUser, registerUser } from '../../services/api/userAPI';
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
  const [selectedCountry, setSelectedCountry] = useState('selected-value');


  LoginModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      closeModal: PropTypes.func.isRequired
  };

  const initialFormData = {
    name: '',
    email: '',
    country: selectedCountry,
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
    { value: 'selected-value', label: 'Country' },
    { value: 'austalia', label: 'Australia' },
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
                  authToken = 1;  
                  const userName = response?.data?.userData?.name
                  const userId = response?.data?.userData?.id
                  setAuth({
                    email, 
                    authToken,
                    userName,
                    userId,
                  })
                  closeModal();
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

  const handleRegistrationSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      let newErrors = {};
      Object.keys(formData).forEach(key => {
          newErrors[key] = validateField(key, formData[key]);
      });
      setErrors(newErrors);
      if (Object.values(newErrors).every(error => error === '')){
        const payload = {
          name: formData.name,
          phone: '',
          email: formData.email,
          country: formData.country,
          password: formData.confirmPassword,
          city:'',
          address:''
        };
        try {
            const response = await registerUser(payload);
            // console.log(response)
            const isSuccess = response && response.status === 201;  
            let authToken = 0;  
            if(isSuccess){
                authToken = 1;  
                const userName = response?.data?.userData?.name
                const userId = response?.data?.userData?.id
                setAuth({
                  email, 
                  authToken,
                  userName,
                  userId,
                })
                setSuccessMessage("User successfully registered.")
                closeModal();
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
  };
    

  return (
    <>
      {loading ? <Loader type={'fixed'} /> : null}
      <Modal isOpen={isOpen} onRequestClose={closeModal}
      className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[460px] z-20 secondaryBg px-6 pt-8 pb-4  shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
      contentLabel="Login Modal">
          <div>
              <i className="fas fa-times text-white cursor-pointer absolute top-3 right-3 z-10" onClick={closeModal}></i>
              <ul className="flex mb-6 items-center">
                  <li className={`text-[18px] uppercase border-r-[1px] border-white text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 1 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(1)}>Login</li>
                  <li className={`text-[18px] uppercase text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 2 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(2)}>Register</li>
              </ul>
              {activeTab === 1 && (
                <form onSubmit={handleLoginSubmit} className="active-content flex flex-col gap-2">
                  <CustomInput onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Login" className="text-black placeholder:text-black bg-white mb-3" />
                  {loginErrors.email && <small className="text-red-500">{loginErrors.email}</small>}
                  
                  <CustomInput onChange={(e) => setPassword(e.target.value)} value={password} name="password" type="password" placeholder="Password" className="text-black placeholder:text-black bg-white mb-3" />
                  {loginErrors.password && <small className="text-red-500">{loginErrors.password}</small>}

                  <div className="flex justify-between items-center">
                    <CustomCheckbox onChange={()=> setRememberLogin(!rememberLogin)} label="Remember me" id="login" />
                    <a className='fsSm text-[#f0b913] hover:text-white cursor-pointer'>Forgot password?</a>
                  </div>
                  <Button text="Login" className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:bg-white hover:text-[#333537]"/>
                  <p className='mt-3 text-[#f0b913] fsSm text-center'>{message}</p>
                </form>
              )}
              {activeTab === 2 && (
                <form onSubmit={handleRegistrationSubmit} className="active-content flex flex-col gap-2">
                  <input type="text" name="name" placeholder="Your Name" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.name && 'border-red-500'}`} value={formData.name} onChange={handleChange} />
                  {errors.name && <small className="text-red-500">{errors.name}</small>}

                  <input type="text" name="email" placeholder="Email" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.email && 'border-red-500'}`} value={formData.email} onChange={handleChange} />
                  {errors.email && <small className="text-red-500">{errors.email}</small>}
                  
                  <CustomSelect className='text-white placeholder:text-white bg-[#262829]' section='w-full before:text-[#4b4c4e] hover:before:text-white' value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)} options={countryOptions} />
                  {errors.country && <small className="text-red-500">{errors.country}</small>}

                  <input type="password" name="password" placeholder="Password" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.password && 'border-red-500'}`} value={formData.password} onChange={handleChange} />
                  {errors.password && <small className="text-red-500">{errors.password}</small>}
                  
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.confirmPassword && 'border-red-500'}`} value={formData.confirmPassword} onChange={handleChange} />
                  {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}

                  <input type="submit" value="Register" className="px-5 py-3 rounded-[3px] text-[14px] font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>
                  <p className='mt-3 text-[#f0b913] fsSm text-center'>{registerMessage}</p>
                </form>
              )}
              {successMessage && activeTab === 2 && (
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
