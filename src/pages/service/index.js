import React from 'react'
import ServiceBanner from '../home/serviceBanner'

const Services = () => {
  return (
    <div>
      <div className='bannerBg bg-bottom py-[100px]' style={{height: 'auto'}}>
        <div className='container flex flex-col justify-center h-full'>
          <h1 className='h2 uppercase text-center text-[#333537]'>OUR SERVICES</h1>
        </div>
      </div>
      <ServiceBanner />
    </div>
  )
}

export default Services
