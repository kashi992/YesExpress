import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import img from '../../assets/images/mainLogo.png';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/images/toogleBtn';
import GenertateInvoices from './generateInvoices';
import PreviousInvoices from './previousReceipt';

const dataArr = [
  {
    icon: "fas fa-tachometer-alt",
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: "fas fa-file-invoice",
    title: "Genertate Invoices",
    link: "/generate-invoices",
  },
  {
    icon: "fas fa-file-invoice",
    title: "Previous Invoices",
    link: "/previous-invoices",
  },
  // {
  //   icon: "fas fa-globe",
  //   title: "Go to Main Site",
  //   link: "/",
  // },
]
const dropdownArr = [
  {
    label: "Edit profile",
  },
  {
    label: "Sign out",
  },
]
const Dashboard = () => {
  const [isHover, setIsHover] = useState(null);
  const [isDropdown, setIsDropdown] = useState(false);
  const [isHamclick, setIsHamclick] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const dropdownRef = useRef(null);

  useEffect(() => {
    // Close the dropdown when clicking outside of it
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const mouseEnter = (index) => {
    setIsHover(index);
  };

  const mouseLeave = () => {
    setIsHover(null);
  };

  const setWidth = () => {
    let widthDynamics = "240px";
    if (window.matchMedia("(max-width: 600px)").matches) {
      widthDynamics = "160px";
    }
    return widthDynamics;
  }

  const hamClick = () => {
    setIsHamclick(!isHamclick);
  }

  const handleLinkClick = (link, index) => {
    setActiveTab(index);
    if (link === '/generate-invoices') {
      setSelectedComponent(<GenertateInvoices />);
    }
    else if (link === '/previous-invoices') {
      setSelectedComponent(<PreviousInvoices />);
    }
    else {
      setSelectedComponent(null);
    }
  };

  return (
    <div className='dashboad'>
      <div className='flex h-full'>
        <div className={`secondaryBg absolute h-full left-0 top-0 leftBar border-r-[1px] border-[#333537] transition-transform duration-300 ${isHamclick ? '-translate-x-full' : 'translate-x-0'}`} style={{ width: setWidth() }}>
          <div className='py-4 px-6'>
            <img src={img} alt="Yes Express Services" className='w-[70px]' />
          </div>
          <div className='mt-2'>
            {
              dataArr.map((data, index) => (
                <a key={index} className={`flex gap-2 items-center py-3 px-4 transition-colors duration-300 cursor-pointer mb-1 last-of-type:mb-0 ${isHover === index || activeTab === index ? 'active bg-[#f0b913]' : 'unactive bg-transparent'} `} onMouseEnter={() => mouseEnter(index)} onMouseLeave={mouseLeave} onClick={() => handleLinkClick(data.link, index)}>
                  <i className={`${data.icon} ${isHover === index || activeTab === index ? 'active text-[#333537]' : 'unactive text-white'}`}></i>
                  <h6 className={`fs14 ${isHover === index || activeTab === index ? 'active text-[#333537]' : 'unactive text-white'} `}>{data.title}</h6>
                </a>
              ))
            }
            <Link to="/" className={`flex gap-2 items-center py-3 px-4 transition-colors duration-300 cursor-pointer mb-1 last-of-type:mb-0 mainSite`}> 
            <i className={`fas fa-globe text-white`}></i>
                  <h6 className={`fs14 text-white`}>Go to main site</h6>
            </Link>
          </div>
        </div>
        <div className={`w-full transition-all duration-300`} style={{ paddingLeft: isHamclick ? 0 : setWidth() }}>
          <div className='flex justify-between items-center py-2 px-4 secondaryBg border-b-[1px] border-[#f0b913] cursor-pointer'>
            <div onClick={hamClick}>
              <Hamburger iconClr="#fff" />
            </div>
            <div className={`relative`} ref={dropdownRef}>
              <i className="fas fa-user-circle text-white cursor-pointer fs20" onClick={() => setIsDropdown(!isDropdown)}></i>
              <div className={`absolute py-2 bg-white shadow-lg rounded-md right-0 transition-opacity duration-300 ease-in-out ${isDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {
                  dropdownArr.map((data, index) => (
                    <a key={index} className='px-6 py-2 hover:bg-[#f0b913] cursor-pointer block text-nowrap fs14 leading-none' onClick={() => setIsDropdown(false)}>{data.label}</a>
                  ))
                }
              </div>
            </div>
          </div>
          <div className='bannerBg ' style={{ height: "calc(100% - 38.8px)", backgroundPosition: 'bottom' }}>
            {selectedComponent}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
