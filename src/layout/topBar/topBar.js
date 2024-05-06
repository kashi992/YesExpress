import React, {useState, useContext} from 'react';
import LoginModal from '../../components/popups/loginModal';
import AuthContext from '../../services/context/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import ShippmentModal from '../../components/popups/shippmentModal';

const TopBar = () => {
    const { auth } = useContext(AuthContext);
    const { setAuth } = useContext(AuthContext);
    const [showProfilePanel, setShowProfilePanel] = useState(false);
    const location = useLocation()
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
    const [isShippment, setIsShippment] = useState(false);

    const openLoginModal = () => {
        setModalIsOpen(true);
    };
    const openShippmentModal = () => {
        setIsShippment(true);
    };


    const closeModal = () => {
        setModalIsOpen(false);
        setIsShippment(false);
    };

    const logOut = () => {
        setAuth({});
        setShowProfilePanel(false)
    };

    return (
        <div className='bg-[#262829]'>
            <div className={`${location.pathname === '/dashboard' ? 'max-w-full px-[15px]' : 'container'}`}>
                <div className={`flex items-center  ${location.pathname === '/dashboard' ? 'justify-end h-[40px]' : 'justify-between h-[55px]'}`}>
                    <div className={`items-center gap-8 ${location.pathname === '/dashboard' ? 'hidden' : 'flex'}`}>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                            Phone: <a href="tel:+61 476 909 090" className='text-[#989ea6] hover:text-[#f0b913] font-normal ms-1'>+61 476 909 090</a>
                        </h6>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                            Email: <a href="mailto:yesexpress.mel@gmail.com" className='text-[#989ea6] hover:text-[#f0b913] font-normal ms-1'>yesexpress.mel@gmail.com</a>
                        </h6>
                    </div>
                    <div className='flex items-center gap-8'>
                        <h6 className='whiteClr text-[13px] font-bold cursor-pointer' onClick={openShippmentModal}>
                            Shipment Tracker
                        </h6>
                        {auth.authToken ?
                            <div className='relative user-profile-con' onMouseEnter={() => setShowProfilePanel(true)} onMouseLeave={(e) => setShowProfilePanel(false)}>
                                <h6 className='whiteClr text-[13px] font-bold cursor-pointer'>
                                    {auth.userName}
                                </h6>
                                {showProfilePanel && 
                                    <div className='profile-dropdown absolute z-10 p-4 rounded-[8px] border border-[#474747] bg-[#262829] w-[180px] right-0 top-4'>
                                        <div className='content'>
                                            <h4 className='text-white text-center text-sm font-medium opacity-60'>{auth.email}</h4>
                                            <h4 className='text-white mt-3 text-sm font-medium opacity-60'>{auth.userName}</h4>
                                            <ul className='mt-3'>
                                                <li className='text-white opacity-60 hover:opacity-100 text-xs py-2 border-b border-[#7d7d7d]'>
                                                    <Link to={'/dashboard'}>
                                                        <i className="fas fa-cog"></i>
                                                        <span className='ms-2'>Dashboard</span>
                                                    </Link>
                                                </li>
                                                <li className='text-white opacity-60 hover:opacity-100 text-xs py-2'>
                                                    <Link onClick={logOut}>
                                                        <i className="fas fa-sign-out-alt"></i>
                                                        <span className='ms-2'>Logout</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </div>
                            
                            : 
                            <h6 className='whiteClr text-[13px] font-bold cursor-pointer' onClick={openLoginModal}>
                                Login
                            </h6>
                        }
                        
                        {/* <div className="relative cursor-pointer" onMouseEnter={handleDropdown} onMouseLeave={closeDropdown}>
                            <a className={flex gap-1 items-center leading-loose justify-between text-[13px] font-bold ${isDropdownOpen ? 'text-[#f0b913]' : 'text-white'}} >
                                EN
                                <DownChevron iconclr={isDropdownOpen ? '#f0b913' : '#fff'}  className="w-[12px] h-[9px]"/>
                            </a>
                            <div
                                className={absolute left-2/4 top-[25px]  -translate-x-2/4 z-50 flex w-full flex-col bg-[#262829] text-[13px] whiteClr ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-300 min-w-[140px] px-5 py-2 gap-1}>
                                <a className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">
                                    English
                                </a>
                                <a className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">
                                    German
                                </a>
                            </div>
                        </div> */}
                        <LoginModal isOpen={modalIsOpen} closeModal={closeModal} />
                        <ShippmentModal isOpen={isShippment} closeModal={closeModal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;