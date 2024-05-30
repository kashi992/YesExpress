import React from 'react'
import TitleBox from '../../../components/titleBox'
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
        img: "",
        title: '05.',
        detail: 'Cargo Delivered',
    },
]

const ManageShipment = () => {
    return (
        <div className='pb100'>
            <div className="container">
                <TitleBox title1Css="secondaryClr" title2Css="primaryClr" borderWrap="justify-center" className="text-center" borderCss="primaryClrBg" title1='HOW TO MANAGE' title2='SHIPMENTS?' detail="These are a few simple steps to request, process and receive your shipment. All the unnecessary  complications are going to be taken care of by our specialists." />
                <div className="flex justify-between">
                    {
                        dataArr.map((data, index) => (
                            <div key={index} className='flex items-center justify-between w-[20%]'>
                                <div className='w-full text-center'>
                                    <h2 className='fs50 primaryClr'>{data.title}</h2>
                                    <p className='max-w-[145px] w-full mx-auto fs22 secondaryClr font-semibold'>{data.detail}</p>
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
