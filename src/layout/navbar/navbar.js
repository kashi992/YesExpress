import React, { useState, useContext, useEffect } from 'react';
import mainLogo from '../../assets/images/mainLogo.png';
import DownChevron from '../../assets/images/downChevron';
import Button from '../../components/buttons/button';
import { useLocation, Link } from 'react-router-dom';
import AuthContext from '../../services/context/AuthProvider';

const Navbar = () => {
    const location = useLocation();
    const { auth } = useContext(AuthContext);
    const [dropdownStates, setDropdownStates] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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
                    className={`fsSm font-semibold uppercase flex items-center justify-between py-3 px-2 gap-1 ${dropdownStates[navItem] || isActive ? 'text-[#f0b913]' : 'text-white'}`}
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
        <nav className={`secondaryBg transition-all duration-700 ${location.pathname === "/dashboard" ? 'hidden' : 'block'} ${isNavbarFixed ? 'sticky top-0 w-full z-50 shadow-md' : ''}`}>
            <div className="container">
                <div className="relative flex items-center justify-between py-4">
                    <div className="max-w-[40px] w-full">
                        <Link to="/"><img src={mainLogo} alt="Yes Express" /></Link>
                    </div>
                    <div className="flex gap-4 items-center">
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
                        <Button className='primaryClrBg whiteClr hover:text-[#333537] hover:bg-white' text="Get a Quote" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
