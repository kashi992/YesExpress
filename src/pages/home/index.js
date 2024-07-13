import React from 'react'
import Banner from './banner/banner'
import ServiceBanner from './serviceBanner'
import DelieveryBanner from './delieveryBanner'
import Newsletter from './newsletter'
import Blog from './blog'
import ManageShipment from './manageShipment'
import ServiceProvide from './serviceProvide'

const Home = () => {
  return (
    <>
   <Banner/>
   <ServiceBanner/>
   <DelieveryBanner/>
   <ServiceProvide/>
   <ManageShipment/>
   {/* <Blog/> */}
   {/* Blog section comment for now */}
   <Newsletter/>
    </>
  )
}

export default Home
