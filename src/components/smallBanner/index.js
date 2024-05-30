import React from 'react';

const SmallBanner = ({ title, img,className }) => {
    return (
        <div className={`bg-no-repeat relative z-10 py100 before:bg-[#f0b913] before:opacity-85 before:left-2/4 before:top-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:-z-10 bg-cover before:w-full before:h-full before:absolute ${className}`} style={{ backgroundImage: `url(${img})` }}>
            <div className="container">
                <div className='container flex flex-col justify-center h-full'>
                    <h1 className='fs50 uppercase text-center text-[#333537]'>{title}</h1>
                </div>
            </div>
        </div>
    );
};

export default SmallBanner;
