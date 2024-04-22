import React from 'react'
import Banner from './banner/banner'
import ServiceBanner from './serviceBanner'
import DelieveryBanner from './delieveryBanner'
import Newsletter from './newsletter'

const Home = () => {
  return (
    <div>
   <Banner/>
   <ServiceBanner/>
   <DelieveryBanner/>
   <Newsletter/>
    </div>
  )
}

export default Home
