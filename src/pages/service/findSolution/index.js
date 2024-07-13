import React from 'react'
import TitleBox from '../../../components/titleBox'
import Button from '../../../components/buttons/button'
import bgImg from '../../../assets/images/solutionBuilder.jpg'
import LinkButton from '../../../components/buttons/linkButton'
const FindSolution = () => {
  return (
    <div className='bannerBg py100' style={{height: 'auto', backgroundImage: `url(${bgImg})`}}>
      <div className="container">
      <TitleBox title1Css="secondaryClr" title2Css="text-white" borderWrap="justify-center" className="text-center" borderCss="bg-white" title1="Solutions" title2="Customized for You" detail="Present us with your logistics challenges; we're equipped to provide effective solutions. Whether you're facing customs clearance issues or need urgent shipment handling, YES EXPRESS SERVICES designs strategies tailored to meet your exact needs. Contact us today for a consultation, and discover how we can simplify and optimize your logistics operations." detailCss="text-white" />
      <div className="flex justify-center items-center gap-2">
      <LinkButton link="/get-quote" text="Get a Free quote" className="bg-[#333537] text-white hover:text-[#333537] hover:bg-white uppercase"/>
      <LinkButton link="/contact" text="contact us now" className="bg-[#333537] text-white hover:text-[#333537] hover:bg-white uppercase"/>
      </div>
      </div>
    </div>
  )
}

export default FindSolution
