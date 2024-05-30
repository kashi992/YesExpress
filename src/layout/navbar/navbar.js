import React, { useState, useContext, useEffect, useRef } from 'react';
import mainLogo from '../../assets/images/mainLogo.png';
import DownChevron from '../../assets/images/downChevron';
import Button from '../../components/buttons/button';
import { useLocation, Link } from 'react-router-dom';
import AuthContext from '../../services/context/AuthProvider';
import './index.scss'

const Navbar = () => {
    const location = useLocation();
    const { auth } = useContext(AuthContext);
    const [dropdownStates, setDropdownStates] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const sidebarRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsNavbarFixed(true);
                document.body.classList.add('bodyOverflow');
            } else {
                setIsNavbarFixed(false);
                document.body.classList.remove('bodyOverflow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleDropdown = (navItem) => {
        setDropdownStates({
            ...dropdownStates,
            [navItem]: true
        });
    };

    const closeDropdown = (navItem) => {
        setDropdownStates({
            ...dropdownStates,
            [navItem]: false
        });
    };

    const hamclick = () => {
        setIsNavbarOpen(!isNavbarOpen);
        // document.documentElement.style.overflow = isNavbarOpen ? "auto" : "hidden";
         document.documentElement.classList.add('htmaa');
    };
    
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            // Clicked outside the sidebar, so close it
            setIsNavbarOpen(false);
          }
        };
    
        // Add event listener to detect clicks outside the sidebar
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          // Clean up event listener on component unmount
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, []);
    

    const buildLink = (to, text, dropdownContent, navItem) => {
        const isActive = location.pathname === to;
        return (
            <div
                className="relative"
                onMouseEnter={() => handleDropdown(navItem)}
                onMouseLeave={() => closeDropdown(navItem)}
            >
                <Link
                    to={to}
                    className={`navLink fs14 font-semibold uppercase flex items-center justify-between py-3 px-2 gap-1 ${isActive ? 'text-[#f0b913]' : 'text-white'}`}
                >
                    {text}
                    {dropdownContent && (
                        <DownChevron iconClr={dropdownStates[navItem] ? '#f0b913' : "#fff"} className="w-[12px] h-[9px]" />
                    )}
                </Link>
                {dropdownContent && (
                    <div className={`absolute left-2/4 -translate-x-2/4 z-50 min-w-[180px] flex flex-col bg-[#262829] text-[13px] whiteClr px-6 py-4  gap-3 transition-opacity duration-300 ${dropdownStates[navItem] ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        {dropdownContent}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <div className={`bgOverlay ${isNavbarOpen ? 'active' : ''}`}></div>
            <nav className={`navWrap secondaryBg transition-all duration-700 ${location.pathname === "/dashboard" ? 'hidden' : 'block'} ${isNavbarFixed ? 'sticky top-0 w-full z-50 shadow-md' : ''}`}>
                <div className="container">
                    <div className="relative flex items-center justify-between min-[1370px]:py-4 py-3">
                        <div className="min-[1370px]:max-w-[40px] max-w-[34px] w-full">
                            <Link to="/"><img src={mainLogo} alt="Yes Express" /></Link>
                        </div>

                        <div className="flex gap-4 items-center">
                            <div ref={sidebarRef} className={`flex gap-4 items-center sideBar ${isNavbarOpen ? 'active' : ''}`}>
                                <div className="flex justify-between items-start lg:hidden w-full mb-3">
                                    <Link to="/" className=''><img src={mainLogo} alt="Yes Express" className='h-[75px]' /></Link>
                                    <div onClick={() => setIsNavbarOpen(false)} className='text-white text-xl'><i className="fas fa-times"></i></div>
                                </div>

                                {/* {buildLink("/", "Home",
                            <>
                                <Link to="" className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">Page 1</Link>
                                <Link to="" className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">Page 2</Link>
                            </>
                        , 'home')} */}
                                {buildLink("/", "Home", null, 'home')}
                                {buildLink("/services", "Services", null, 'services')}
                                {buildLink("/book-shipment", "Book Shipment", null, 'book shipment')}
                                {buildLink("/contact", "Contacts", null, 'contacts')}
                                {buildLink("/about", "About", null, 'about')}
                                {auth.authToken && buildLink("/previous-receipt", "Previous Receipts", null, 'previous receipts')}
                            </div>
                            <Link to='/get-quote'>
                                <Button className='primaryClrBg whiteClr hover:text-[#333537] hover:bg-white' text="Get a Quote" />
                            </Link>
                            {/* ham burger start */}
                            <div className={`w-[24px] h-[14px] flex-col justify-between hidden max-[991px]:flex`} onClick={hamclick}>
                                <span className={`h-[1px] w-full block bg-white`}></span>
                                <span className={`h-[1px] w-full block bg-white`}></span>
                                <span className={`h-[1px] w-full block bg-white`}></span>
                            </div>
                            {/* ham burger end */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
