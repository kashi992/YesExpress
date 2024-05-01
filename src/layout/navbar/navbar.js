import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/images/mainLogo.png';
import DownChevron from '../../assets/images/downChevron';
import Button from '../../components/buttons/button';

const Navbar = () => {
    const [dropdownStates, setDropdownStates] = useState(false);

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

    const buildLink = (to, text, dropdownContent, navItem) => (
        <div
            className="relative"
            onMouseEnter={() => handleDropdown(navItem)}
            onMouseLeave={() => closeDropdown(navItem)}
        >
            <Link
                to={to}
                className={`fsSm font-semibold uppercase flex items-center justify-between py-3 px-2 gap-1 ${dropdownStates[navItem] ? 'text-[#f0b913]': 'text-white'}`}
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

    return (
        <nav className="secondaryBg">
            <div className="container">
                <div className="relative flex items-center justify-between py-4">
                    <div className="max-w-[40px] w-full">
                        <img src={mainLogo} alt="Yes Express" />
                    </div>
                    <div className="flex gap-6 items-center">
                        {/* {buildLink("/", "Home",
                            <>
                                <Link to="" className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">Page 1</Link>
                                <Link to="" className="flex items-center gap-1 hover:text-[#f0b913] before:bg-[#d8d9dc] before:w-[3px] before:h-[3px] before:rounded-full before:block hover:before:bg-[#f0b913]">Page 2</Link>
                            </>
                        , 'home')} */}
                        {buildLink("/", "Home", null, 'home')}
                        {buildLink("/services", "Services", null,'services')}
                        {buildLink("/add-receipt", "Add Receipt", null,'add receipt')}
                        {buildLink("/contact", "Contacts", null,'contacts')}
                        {buildLink("/about", "About", null,'about')}
                        <Button className='primaryClrBg whiteClr hover:text-[#333537] hover:bg-white' text="Get a Quote" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
