import React, { useState, useContext } from 'react';
import LoginModal from '../../components/popups/loginModal';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../services/context/AuthProvider';
import ShippmentModal from '../../components/popups/shippmentModal';
// import DownChevron from '../../assets/images/downChevron';

const TopBar = () => {
    const location = useLocation();
    const { auth } = useContext(AuthContext);
    const { setAuth } = useContext(AuthContext);
    const [showProfilePanel, setShowProfilePanel] = useState(false)
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const handleDropdown = () => {
    //     // Toggle the dropdown state
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    // const closeDropdown = () => {
    //     // Close the dropdown when mouse leaves
    //     setIsDropdownOpen(false);
    // };
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isShippmentModal, setShippmentModal] = useState(false);

    const openModal = () => {
        setModalIsOpen(!modalIsOpen);
        setShippmentModal(!isShippmentModal);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setShippmentModal(false);
    };

    const logOut = () => {
        setAuth({});
        setShowProfilePanel(false)
    };

    return (
        <div className={`bg-[#262829] ${location.pathname === '/dashboard' ? 'hidden' : 'block'}`}>
            <div className="container">
                <div className='flex justify-between items-center h-[55px]'>
                    <div className='flex items-center gap-8'>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                            Phone: <a href="tel:+61 476 909 090" className='text-[#989ea6] hover:text-[#f0b913] font-normal ms-1'>+61 476 909 090</a>
                        </h6>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                            Email: <a href="mailto:yesexpress.mel@gmail.com" className='text-[#989ea6] hover:text-[#f0b913] font-normal ms-1'>yesexpress.mel@gmail.com</a>
                        </h6>
                    </div>
                    <div className='flex items-center gap-8'>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer' onClick={openModal}>
                            Shipment Tracker
                        </h6>

                        {auth.authToken ? 
                            <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                                {auth.userName}
                            </h6>
                            : 
                            <h6 className='whiteClr text-[13px] font-bold cursor-pointer' onClick={openModal}>
                                Login
                            </h6>
                        }
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                            <Link
                                to="/dashboard"
                                className={`whiteClr text-[13px] font-bold cursor-pointer`}
                            >Dashboard</Link>
                        </h6>

                        {/* <div className="relative cursor-pointer" onMouseEnter={handleDropdown} onMouseLeave={closeDropdown}>
                            <a className={`flex gap-1 items-center leading-loose justify-between text-[13px] font-bold ${isDropdownOpen ? 'text-[#f0b913]' : 'text-white'}`} >
                                EN
                                <DownChevron iconclr={isDropdownOpen ? '#f0b913' : '#fff'}  className="w-[12px] h-[9px]"/>
                            </a>
                            <div
                                className={`absolute left-2/4 top-[25px]  -translate-x-2/4 z-50 flex w-full flex-col bg-[#262829] text-[13px] whiteClr ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 min-w-[140px] px-5 py-2 gap-1`}>
                                <a className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">
                                    English
                                </a>
                                <a className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">
                                    German
                                </a>
                            </div>
                        </div> */}
                        <LoginModal isOpen={openModal} closeModal={closeModal} />
                       <ShippmentModal isOpen={openModal} closeModal={closeModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
