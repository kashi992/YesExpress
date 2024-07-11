import React, { useState } from 'react'

const PaymentOptions = ({ totalPrice, codEnabled, setCodEnabled, destination, setPaymentProof}) => {
    const [paymentMethod, setPaymentMethod] = useState('')
    const [paymentFileName, setPaymentFileName] = useState('')

    const handlePaymentChange = (event) => {
        const method = event.target.value;
        setPaymentMethod(method);
        setCodEnabled(method === 'COD');
    };

    const handleUploadPaymentProof = (event) =>{
        const file = event.target.files[0];
        if(file){
            setPaymentProof(file)
            setPaymentFileName(file.name)
        }else{
            setPaymentProof('')
            setPaymentFileName('')
        }

    }

  return (
    <div className='my-10 max-w-[992px] w-[95%] mx-auto bg-white rounded-md p-7'>
        <h2 className='text-3xl mb-3'>Payment Options</h2>
        <div className='flex w-full flex-wrap'>
            <div className='basis-full md:basis-7/12 pe-7'>
                <h2 className='text-xl mb-5 text-[#f0b913]'>Select a payment method</h2>
                <label htmlFor='card-payment' className='bg-[#ececec] cursor-pointer payment-button mb-3 border rounded-lg px-4 py-3 text-xl font-medium flex items-center justify-between'>
                    <span>
                        <input onChange={handlePaymentChange} value='card' name='payment-method' id='card-payment' type='radio' className='me-3'/>
                        Debit/Credit Card
                    </span>
                    <span className='flex gap-1'>
                        <i className="fab fa-cc-mastercard"></i>
                        <i className="fab fa-cc-visa"></i>
                    </span>
                </label>
                {destination === 'paktoaus' ? 
                    <label htmlFor='bank-transfer' className='bg-[#ececec] cursor-pointer payment-button mb-3 border rounded-lg px-4 py-3 text-xl font-medium flex items-center justify-between'>
                        <span className='flex'>
                            <input onChange={handlePaymentChange} name='payment-method' value='bank' id='bank-transfer' type='radio' className='me-3'/>
                            <span>
                                Bank Transfer (<span className='text-sm'>Bank Account, EasyPaisa, JazzCash</span>)
                            </span>
                        </span>
                        <span>
                            <i className="fas fa-university"></i>
                        </span>
                    </label>
                : 
                    <label htmlFor='bank-transfer' className='bg-[#ececec] cursor-pointer payment-button mb-3 border rounded-lg px-4 py-3 text-xl font-medium flex items-center justify-between'>
                        <span>
                            <input onChange={handlePaymentChange} name='payment-method' value='bank' id='bank-transfer' type='radio' className='me-3'/>
                            Bank Transfer
                        </span>
                        <span>
                            <i className="fas fa-university"></i>
                        </span>
                    </label>
                }
                {destination !== 'austopak' ? 
                    <label htmlFor='cod' className='bg-[#ececec] cursor-pointer payment-button mb-3 border rounded-lg px-4 py-3 text-xl font-medium flex items-center justify-between'>
                        <span>
                            <input checked={codEnabled} onChange={handlePaymentChange} id='cod' value='COD' name='payment-method' type='radio' className='me-3'/>
                            COD
                        </span>
                        <span>
                            <i className='fa fa-money-bill-alt'></i>
                        </span>
                    </label>
                : null} 
            </div>
            <div className='basis-full md:basis-5/12'>
                <h4 className='text-2xl mb-4 font-bold'>Shipment Summary</h4>
                <div className='flex items-center justify-between'>
                    <p className='text-lg my-2'>Shipment Charges:</p>
                    <p className='text-lg my-2 font-bold'>{totalPrice ? totalPrice : '00.00'}</p>
                </div>
                {/* <div className='flex items-center justify-between'>
                    <p className='text-lg my-2'>Delivery Charges:</p>
                    <p className='text-lg my-2 font-bold'>$0.00</p>
                </div> */}
                <div className='flex items-center justify-between border-t mt-5'>
                    <p className='text-lg mt-4'>Total Price: </p>
                    <p className='text-lg mt-4 font-bold'>{totalPrice ? totalPrice : '00.00'}</p>
                </div>
            </div>
            {paymentMethod === 'bank' ? 
                <div className='basis-full mt-5'>
                    <h3 className='text-xl font-bold'>Account Details</h3>
                    {destination === 'paktoaus' ?
                        <div className='flex mt-4'>
                            <div className='basis-1/2'>
                                <h4 className='text-lg font-bold mb-3'>JazzCash</h4>
                                <p className='text-md mb-1'>Account Title: YesExpress Services</p>
                                <p className='text-md mb-1'>Account #: 0310 1112223</p> 
                            </div>
                            <div className='basis-1/2'>
                                <h4 className='text-lg font-bold mb-3'>EasyPaisa</h4>
                                <p className='text-md mb-1'>Account Title: YesExpress Services</p>
                                <p className='text-md mb-1'>Account #: 0345 1112223</p> 
                            </div>
                        </div>
                        :
                        <div className='flex mt-4'>
                            <div className='basis-1/2'>
                                <h4 className='text-lg font-bold mb-3'>Australia Account Details</h4>
                                <p className='text-md mb-1'>Account Title: YES EXPRESS SERVICES</p>
                                <p className='text-md mb-1'>Account #: 422154130</p> 
                                <p className='text-md mb-1'>BSB: 083722</p> 
                            </div>
                            <div className='basis-1/2'>
                                <h4 className='text-lg font-bold mb-3'>Payid Details</h4>
                                <p className='text-md mb-1'>Name: YES EXPRESS SERVICES Pty Ltd</p>
                                <p className='text-md mb-1'>Payid number: 0476909090</p> 
                            </div>
                        </div>
                    }
                    <div className='mt-7'>
                        <p className='text-medium font-bold mb-3'>Please pay the amount by any of the above methods and upload payment recipt or screenshot below.</p>
                        <label htmlFor='payment-proof' className='flex flex-col gap-3 cursor-pointer items-center justify-center w-full h-[100px] border border-[#F0B913] rounded-md'>
                            <input onChange={handleUploadPaymentProof} type='file' id='payment-proof' accept="image/*" hidden/>
                            <i className='fas fa-upload'></i>
                            <span>{paymentFileName ? paymentFileName : 'Click to upload screenshot'}</span>
                        </label>
                    </div>
                </div>
                :
                null
            }
        </div>
    </div>
  )
}

export default PaymentOptions