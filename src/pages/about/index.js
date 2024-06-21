import React from 'react'
import SmallBanner from '../../components/smallBanner'
import img from '../../assets/images/BannerBg.png'
import AboutBanner from './banner'
import Testimonial from './testimonial'
import OurAdvantages from './ourAdvantages'
import OurOffices from './ourOffices'
const About = () => {
  return (
    <div>
      <SmallBanner title="About" img={img} className="bg-bottom"/>
      <AboutBanner/>
      <Testimonial/>
      <OurAdvantages/>
      <OurOffices/>
    </div>
  )
}

export default About
