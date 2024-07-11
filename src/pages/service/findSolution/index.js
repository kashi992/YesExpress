import React from 'react'
import TitleBox from '../../../components/titleBox'
import Button from '../../../components/buttons/button'
import bgImg from '../../../assets/images/solutionBuilder.jpg'
import LinkButton from '../../../components/buttons/linkButton'
const FindSolution = () => {
  return (
    <div className='bannerBg py100' style={{height: 'auto', backgroundImage: `url(${bgImg})`}}>
      <div className="container">
      <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="bg-white" title2="WE'LL FIND A SOLUTION" detail="Let Us Help You to Find a Solution That Meets Your Needs" detailCss="text-white" />
      <div className="flex justify-center items-center gap-2">
      <LinkButton link="/get-quote" text="Get a Free quote" className="bg-[#333537] text-white hover:text-[#333537] hover:bg-white uppercase"/>
      <LinkButton link="/contact" text="contact us now" className="bg-[#333537] text-white hover:text-[#333537] hover:bg-white uppercase"/>
      </div>
      </div>
    </div>
  )
}

export default FindSolution
