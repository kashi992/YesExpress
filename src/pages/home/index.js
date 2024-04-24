import React from 'react'
import Banner from './banner/banner'
import ServiceBanner from './serviceBanner'
import DelieveryBanner from './delieveryBanner'
import Newsletter from './newsletter'
import Blog from './blog'
import ManageShipment from './manageShipment'

const Home = () => {
  return (
    <div>
   <Banner/>
   <ServiceBanner/>
   <DelieveryBanner/>
   <ManageShipment/>
   <Blog/>
   <Newsletter/>
    </div>
  )
}

export default Home
