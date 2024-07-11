import React from 'react'
import './index.scss'
import EstimateCalculator from '../../../components/estimateCalculator'
import TitleBox from '../../../components/titleBox'

const DelieveryBanner = () => {
    return (
         
        <div className='py100 primaryClrBg'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="text-white" borderWrap="justify-center" className="text-center" borderCss="bg-white" title1='Quickly Calculate' title2='Your Shipping Costs' detail="Calculate your shipping costs quickly and easily with our online delivery cost estimator. Just input your shipment details, and we’ll provide you with an accurate estimate, helping you plan better and save costs. Our transparent pricing ensures no hidden fees, just reliable and affordable shipping." detailCss="text-white" />
                <EstimateCalculator />
            </div>
        </div>
    )
}

export default DelieveryBanner
