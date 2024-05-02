import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './modal.scss';

const LoginModal = ({ isOpen, closeModal }) => {
    LoginModal.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        closeModal: PropTypes.func.isRequired
    };

    const initialFormData = {
        email: '',
        password: '',
        country: '',
        name: '',
        confirmPassword: ''
    };

    const initialErrors = {
        email: '',
        password: '',
        country: '',
        name: '',
        confirmPassword: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [activeTab, setActiveTab] = useState(1);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateField = (fieldName, value) => {
        switch (fieldName) {
            case 'email':
                const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRegex.test(value)) {
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

    const handleSubmit = e => {
        e.preventDefault();
        let newErrors = {};
        Object.keys(formData).forEach(key => {
            newErrors[key] = validateField(key, formData[key]);
        });
        setErrors(newErrors);
        if (Object.values(newErrors).every(error => error === '')) {
            setSuccessMessage('Form successfully submitted');
            setTimeout(() => {
                setSuccessMessage('');
                if (activeTab === 1) {
                    closeModal(); // Close modal after successful submission in tab 1
                    setFormData(initialFormData); // Reset form data
                    setErrors(initialErrors); // Reset form errors
                }
                setActiveTab(1); // Reset active tab to 1
            }, 1000);
        }
    };
    

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[460px] z-20 secondaryBg px-6 pt-8 pb-4  shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
        contentLabel="Login Modal"
    >
            <div>
            <i className="fas fa-times text-white cursor-pointer absolute top-3 right-3 z-10" onClick={closeModal}></i>
                <ul className="flex mb-6 items-center">
                    <li className={`text-[18px] uppercase border-r-[1px] border-white text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 1 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(1)}>Login</li>
                    <li className={`text-[18px] uppercase text-center w-2/4 text-white leading-none cursor-pointer ${activeTab === 2 ? 'active-tabs' : ''}`} onClick={() => setActiveTab(2)}>Register</li>
                </ul>
                <form onSubmit={handleSubmit} className="active-content flex flex-col gap-2">
                    {activeTab === 1 && (
                         <>
                         {/* Login form fields */}
                         <input type="text" name="email" placeholder="Email" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.email && 'border-red-500'}`} value={formData.email} onChange={handleChange} />
                         {errors.email && <small className="text-red-500">{errors.email}</small>}
                         <input type="password" name="password" placeholder="Password" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.password && 'border-red-500'}`} value={formData.password} onChange={handleChange} />
                         {errors.password && <small className="text-red-500">{errors.password}</small>}
                         <input
                             type="submit"
                             value="Login"
                             className="px-5 py-3 rounded-[3px] text-[14px] font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>
                     </>
                    )}
                    {activeTab === 2 && (
                        <>
                            
                            <input type="text" name="country" placeholder="Country" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.country && 'border-red-500'}`} value={formData.country} onChange={handleChange} />
                            {errors.country && <small className="text-red-500">{errors.country}</small>}

                            
                            <input type="text" name="name" placeholder="Your Name" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.name && 'border-red-500'}`} value={formData.name} onChange={handleChange} />
                            {errors.name && <small className="text-red-500">{errors.name}</small>}

                            <input type="text" name="email" placeholder="Email" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.email && 'border-red-500'}`} value={formData.email} onChange={handleChange} />
                            {errors.email && <small className="text-red-500">{errors.email}</small>}
                            
                            <input type="password" name="password" placeholder="Password" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.password && 'border-red-500'}`} value={formData.password} onChange={handleChange} />
                            {errors.password && <small className="text-red-500">{errors.password}</small>}
                            
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" className={`h-[40px] rounded-[3px] py-2 px-4 fsSm w-full text-white placeholder:text-white bg-[#262829] ${errors.confirmPassword && 'border-red-500'}`} value={formData.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}

                            <input
                                type="submit"
                                value="Register"
                                className="px-5 py-3 rounded-[3px] text-[14px] font-semibold cursor-pointer text-white bg-[#f0b913] w-full mt-4 uppercase mb-3"/>

                        </>
                    )}
                </form>
                {successMessage && activeTab === 2 && (
                    <p className="font-semibold text-green-500 mb-5">
                        {successMessage}
                    </p>
                )}
            </div>
        </Modal>
    );
};


export default LoginModal;
