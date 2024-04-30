import React from 'react'
import ServiceBanner from '../home/serviceBanner'
import FindSolution from './findSolution'
import OurClients from './ourClients'
import SmallBanner from '../../components/smallBanner'
import img from '../../assets/images/BannerBg.png'

const Services = () => {
  return (
    <div>
      <SmallBanner img={img} className="bg-bottom" title="OUR SERVICES"/>
      <ServiceBanner />
      <FindSolution/>
      <OurClients/>
    </div>
  )
}

export default Services
