import React from 'react'
import TitleBox from '../../../components/titleBox'
import "./index.scss"
const dataArr = [
    {
        img: "fas fa-long-arrow-alt-right",
        title: '01.',
        detail: 'Get a Free Estimate',
    },
    {
        img: "fas fa-long-arrow-alt-right",
        title: '02.',
        detail: 'Make Your Order',
    },
    {
        img: "fas fa-long-arrow-alt-right",
        title: '03.',
        detail: 'Pay with any Method',
    },
    {
        img: "fas fa-long-arrow-alt-right",
        title: '04.',
        detail: 'Shipment Started',
    },
    {
        img: "fas fa-long-arrow-alt-right",
        title: '05.',
        detail: 'Shipment Delivered',
    },
]

const ManageShipment = () => {
    return (
        <div className='py100 primaryClrBg'>
            <div className="container">
             
                <TitleBox title1Css="secondaryClr" title2Css="text-white" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1='Effortless Shipment' title2='Management Steps' detail="These are a few simple steps to request, process and receive your shipment. All the unnecessary  complications are going to be taken care of by our specialists." detailCss="text-white" />
                <div className="flex lg:justify-between justify-center lg:flex-nowrap flex-wrap lg:gap-0 gap-y-3 min-[575px]:items-start">
                    {
                        dataArr.map((data, index) => (
                            <div key={index} className='xl:w-[20%] md:w-[33.33%] w-1/2 orderFlow'>
                                <div className='w-full text-center'>
                                    <h2 className='fs50 text-white'>{data.title}</h2>
                                    <p className='xl:max-w-[145px] max-w-[130px] w-full mx-auto fs22 secondaryClr font-semibold'>{data.detail}</p>
                                </div>
                                <i className={`fs40 contents text-center ${data.img}`}></i>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ManageShipment
