import React, { useState } from 'react';
import Modal from 'react-modal';
import './modal.scss'
import CustomInput from '../../components/customInput/customInput';
import CustomCheckbox from '../../components/customCheckbox/customCheckBox';
import Button from '../../components/buttons/button';

const LoginModal = ({ isOpen, closeModal }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[460px] z-20 secondaryBg px-6 pt-8 pb-12  shadow-lg shadow-black rounded-[5px]"
            contentLabel="Login Modal"
        >
            <div>
            <i class="fas fa-times text-white"></i>
                <ul className="flex mb-6 items-center">
                    <li className='h5 uppercase border-r-[1px] border-white text-center w-2/4 text-white leading-none cursor-pointer'>Login</li>
                    <li className='h5 uppercase text-center w-2/4 text-white leading-none cursor-not-allowed'>Register</li>
                </ul>
                <form action="">
                    <CustomInput type="email" placeholder="Login" className="text-white placeholder:text-white bg-[#262829] mb-3" />
                    <CustomInput type="password" placeholder="Password" className="text-white placeholder:text-white bg-[#262829] mb-3" />
                    <div className="flex justify-between items-center">
                        <CustomCheckbox label="Remember me" id="login" />
                        <a className='fsSm text-[#f0b913] hover:text-white cursor-pointer'>Forgot password?</a>
                    </div>
                    <Button text="Login" className="bg-[#f0b913] uppercase mt-6 w-full text-white hover:bg-white hover:text-[#333537]"/>
                </form>
            </div>
        </Modal>
    )
}

export default LoginModal
