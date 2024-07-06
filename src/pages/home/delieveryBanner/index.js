import React from 'react'
import './index.scss'
import EstimateCalculator from '../../../components/estimateCalculator'
import TitleBox from '../../../components/titleBox'

const DelieveryBanner = () => {
    return (
        <div className='py100 primaryClrBg'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="text-white" borderWrap="justify-center" className="text-center" borderCss="bg-white" title1='Estimated' title2='Delivery Cost' detail="From booking to communications, to payment: Express Delivery helps you transport freight faster, cheaper, safer, and easier, so you can stay focused on your business" detailCss="text-white" />
                <EstimateCalculator />
            </div>
        </div>
    )
}

export default DelieveryBanner
