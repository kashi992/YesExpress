import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import img from '../../assets/images/mainLogo.png';
import { Link } from 'react-router-dom';
import Hamburger from '../../assets/images/toogleBtn';

const dataArr = [
  {
    icon: "fas fa-tachometer-alt",
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: "fas fa-file-invoice",
    title: "Genertate Invoice",
    link: "/",
  },
  {
    icon: "fas fa-search",
    title: "Tracking Previous Receipts",
    link: "/",
  },
  {
    icon: "fas fa-globe",
    title: "Go to Main Site",
    link: "/",
  },
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

  return (
    <div className='dashboad'>
      <div className='flex h-full'>
        <div className={`secondaryBg absolute h-full left-0 top-0 leftBar border-r-[1px] border-[#f0b913] transition-transform duration-300 ${isHamclick ? '-translate-x-full' : 'translate-x-0'}`} style={{ width: setWidth() }}>
          <div className='py-4 px-6'>
            <img src={img} alt="Yes Express" className='w-[70px]' />
          </div>
          <div className='mt-2'>
            {
              dataArr.map((data, index) => (
                <Link to={data.link} key={index} className={`flex gap-2 items-center py-3 px-4 transition-colors duration-300 cursor-pointer mb-1 last-of-type:mb-0 ${isHover === index ? 'bg-[#f0b913]' : 'bg-transparent'}`} onMouseEnter={() => mouseEnter(index)} onMouseLeave={mouseLeave}>
                  <i className={`${data.icon} ${isHover === index ? 'text-[#333537]' : 'text-white'}`}></i>
                  <h6 className={`text-[14px] ${isHover === index ? 'text-[#333537]' : 'text-white'}`}>{data.title}</h6>
                </Link>
              ))
            }
          </div>
        </div>
        <div className={`w-full transition-all duration-300`} style={{ paddingLeft: isHamclick ? 0 : setWidth() }}>
          <div className='flex justify-between items-center py-3 px-4 secondaryBg border-b-[1px] border-[#f0b913] cursor-pointer'>
            <div onClick={() => setIsHamclick(!isHamclick)}>
            <Hamburger iconClr="#fff" />
            </div>
            <div className={`relative`} ref={dropdownRef}>
              <i className="fas fa-user-circle text-white cursor-pointer text-[20px]" onClick={() => setIsDropdown(!isDropdown)}></i>
              <div className={`absolute py-2 bg-white shadow-lg rounded-md right-0 transition-opacity duration-300 ease-in-out ${isDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {
                  dropdownArr.map((data, index) => (
                    <a key={index} className='px-6 py-2 hover:bg-[#f0b913] cursor-pointer block text-nowrap text-[14px] leading-none' onClick={() => setIsDropdown(false)}>{data.label}</a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;