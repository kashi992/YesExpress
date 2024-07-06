import React from 'react'
import EstimateCalculator from '../../components/estimateCalculator'
import SmallBanner from '../../components/smallBanner/index'
import img from '../../assets/images/BannerBg.png'
import Newsletter from '../home/newsletter'

const GetQuote = () => {
    return (
        <>
            <SmallBanner title="Get a Service Quote" img={img} className="bg-bottom" />
            <div className='py100' style={{backgroundColor: "rgba(240, 185, 19, 1)"}}>
                <EstimateCalculator className="container" />
            </div>
            <Newsletter/>
        </>
    )
}

export default GetQuote
