import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trackInvoice } from '../../services/api/invoiceApi';
import Loader from '../../components/loader';
import InvoiceStatusTree from '../../components/statusTree/invoiceStatus';

const TrackShipment = () => {
    const { invoiceId } = useParams();
    const [invoiceStatus, setInvoiceStatus] = useState({});
    const [invoice, setInvoice] = useState({});
    const [invoiceProducts, setInvoiceProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const  [errorMessage, setErrorMessage] = useState('');
    const  [statusStep, setStatusStep] = useState('');
    const  [invoiceCountry, setInvoiceCountry] = useState('');

    useEffect(() => {
        let formatedInvoiceId = invoiceId.length > 4 ? invoiceId.substring(4) : ''
        const getInvoiceData = async () => {
          try {
            const trackPayload={
                "invoiceId": formatedInvoiceId,
            }
            const response = await trackInvoice(trackPayload);
            if(response?.data?.status){
                setInvoiceStatus(response?.data?.invoiceStatus)
                setInvoice(response?.data?.invoice[0]);
                setInvoiceCountry(response?.data?.invoiceCountry)
                setInvoiceProducts(response?.data?.product);
                setLoading(false)
            }
          } catch (error) {
            if (error.response && error.response.status === 404) {
                setErrorMessage('No invoice exist for the given id');
            } else {
            console.error('An error occurred while fetching data: ', error);
            }
            setLoading(false)
          }
        };
        getInvoiceData();
    }, [invoiceId]);

    useEffect(() => {
        const statusSteps = {
            'Payment Pending': 2,
            'Payment Confirmed': 3,
            'Package Received': 4,
            'Shipping': 5,
            'Reached Destination Country': 7,
            'Awaiting Customs Clearance': 8,
            'Out for Delivery': 9,
            'Delivered': 10
        };
        setStatusStep(statusSteps[invoiceStatus]);
    }, [invoiceStatus]);
    

    return (
        <>
            {loading ? <Loader type={'fixed'} /> : null}
            {invoice.id ? 
                <div className='w-[90%] xl:w-[82%] m-auto py-10'>
                    <h5 className="mt-2 text-light-2 fs20 font-bold">SHIPMENT STATUS</h5>
                    <p className="text-primary fs24 mt-2 font-medium">Invoice # <span className='text-[#f0b913] font-bold'>{invoiceId}</span></p>
                    <InvoiceStatusTree activeStep={statusStep}/>
                    {invoiceCountry === 'australia' && invoiceStatus === 'Out for Delivery' ? 
                        <div className="bg-white my-2 lg:my-4 w-full">
                            <h5 className='fs20 mb-1 fw600 text-[#f0b913]'>Package handed over to local courier</h5>
                            <p className='text-sm mb-3 font-medium text-black'>Please check your provided email for local courier tracking details.</p>
                        </div>
                    : null}
                    <div className="bg-white my-1 lg:my-6 border-[#f0b913] border-2 p-3 lg:p-6 w-full">
                        <div className='pb-6 mb-6 border-b-2 border-black'>
                            <h5 className='fs20 mb-3 fw600 text-[#f0b913]'>Receiver Information</h5>
                            <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Name:</span>
                                    <span className='font-medium'>{invoice.receiver_name}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'>Address Line 1:</span>
                                    <span className='font-medium'>{invoice.receiver_address}</span>
                                </h6>
                                {invoice.receiver_city? 
                                    <h6 className='flex items-center gap-3 font-semibold'>
                                        <span className='min-w-[120px] lg:min-w-[150px]'>City:</span>
                                        <span className='font-medium'>{invoice.receiver_city}</span>
                                    </h6>
                                    : null
                                }
                                {invoice.receiver_district? 
                                    <h6 className='flex items-center gap-3 font-semibold'>
                                        <span className='min-w-[120px] lg:min-w-[150px]'> State:</span>
                                        <span className='font-medium'>{invoice.receiver_district}</span>
                                    </h6>
                                : null}
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Postcode:</span>
                                    <span className='font-medium'>{invoice.receiver_postcode}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Phone No. (Res):</span>
                                    <span className='font-medium'>{invoice.receiver_phone1}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Phone No. (Off):</span>
                                    <span className='font-medium'>{invoice.receiver_phone2}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Email:</span>
                                    <span className='font-medium break-all'>{invoice.receiver_email}</span>
                                </h6>
                            </div>
                        </div>

                        <div className='pb-6 mb-6 border-b-2 border-black'>
                            <h5 className='fs20 mb-3 fw600 text-[#f0b913]'>Sender Information</h5>
                            <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Name:</span>
                                    <span className='font-medium'>{invoice.sender_name}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'>Address</span>
                                    <span className='font-medium'>{invoice.sender_address}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'>City:</span>
                                    <span className='font-medium'>{invoice.sender_city}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> District/Suburb:</span>
                                    <span className='font-medium'>{invoice.sender_district}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Postcode:</span>
                                    <span className='font-medium'>{invoice.sender_postcode}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Phone No. (Res):</span>
                                    <span className='font-medium'>{invoice.sender_phone1}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Phone No. (Off):</span>
                                    <span className='font-medium'>{invoice.sender_phone2}</span>
                                </h6>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[120px] lg:min-w-[150px]'> Email:</span>
                                    <span className='font-medium break-all'>{invoice.sender_email}</span>
                                </h6>
                            </div>
                        </div>
                        
                        <div className='pb-6 mb-6 border-b-2 border-black'>
                            <h5 className='fs20 mb-3 fw600 text-[#f0b913]'>Product Description</h5>
                            <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap overflow-auto pb-3'>    
                                <table className='w-100 table border-collapse border-1'>
                                    <thead>
                                        <tr>
                                            <th className='text-nowrap pe-3 text-left'>Sr. No</th>
                                            <th className='text-nowrap pe-3 text-left' style={{ width: '35%' }}>Product Description</th>
                                            <th className='text-nowrap pe-3 text-left'>Goods Value</th>
                                            <th className='text-nowrap pe-3 text-left'>Box Weight</th>
                                            <th className='text-nowrap pe-3 text-left'>Length (cm)</th>
                                            <th className='text-nowrap pe-3 text-left'>Width (cm)</th>
                                            <th className='text-nowrap pe-3 text-left'>Height (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoiceProducts ? invoiceProducts.map((product, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{product.product_name}</td>
                                                <td>{product.price_of_goods}</td>
                                                <td>{product.box_weight}</td>
                                                <td>{product.length}</td>
                                                <td>{product.width}</td>
                                                <td>{product.height}</td>
                                            </tr>
                                        )) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h5 className='fs20 mb-3 fw600 text-[#f0b913]'>Pickup Info</h5>
                            <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[150px]'>Pickup Type</span>
                                    <span className='font-medium'>{invoiceProducts[0]?.cargo_type}</span>
                                </h6>
                            </div>
                            <h5 className='fs20 mb-3 fw600 text-[#f0b913] mt-5'>Delivery Info</h5>
                            <div className='flex flex-col gap-y-2 gap-x-4 flex-wrap '>
                                <h6 className='flex items-center gap-3 font-semibold'>
                                    <span className='min-w-[150px]'> Cash on Delivery:</span>
                                    <span className='font-medium'>{invoiceProducts[0]?.COD === 1 ? 'Yes' : 'No'}</span>
                                </h6>
                            </div>
                        </div>

                    </div>
                </div>
            : <h2 className='font-bold fs50 text-center py-32'>{errorMessage}</h2>}
        </>
    )
}

export default TrackShipment