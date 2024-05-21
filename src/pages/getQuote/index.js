import React from 'react'
import EstimateCalculator from '../home/estimateCalculator'
import SmallBanner from '../../components/smallBanner/index'
import img from '../../assets/images/BannerBg.png'
import Newsletter from '../home/newsletter'

const GetQuote = () => {
    return (
        <>
            <SmallBanner title="Get a Service Quote" img={img} className="bg-bottom" />
            <div className='container my-[80px]'>
                <EstimateCalculator />
            </div>
            <Newsletter/>
        </>
    )
}

export default GetQuote
