// CustomTableComponent.jsx
import React, {useEffect, useState} from 'react';
import { getInvoices } from '../../../services/api/invoiceApi';
import { format, parseISO } from 'date-fns';
import './index.scss';
import { Link } from 'react-router-dom';

const PreviousInvoices = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Change this value to adjust items per page
  const [invoices, setInvoices] = useState([]);
  
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalPages = Math.ceil(invoices?.length / itemsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(()=>{
    const getInvoiceData =async ()=>{
      try {
          const payload = {
            webUserId: 'wb-u-8'
          }
          const response = await getInvoices(payload)
          if(response?.status === 200){
              setInvoices(response?.data?.allInvoices)
          }
          
      } catch (error) {
          console.log(error)
      }
    }
    getInvoiceData();
  })
  
  const getInvoiceId = (city, invoicePdfId) =>{
    const codedCity=city.substring(0, 3).toUpperCase()
    const invoicePrintId = codedCity + "-"+ invoicePdfId;
    return invoicePrintId;
  }

  return (
    // max-h-[calc(100vh-125px)]
    <div className='customTable container py100 h-full overflow-x-auto' style={{height: "auto"}}>
      <h1 className='fs40 font-semibold mb-4'>Previous invoices</h1>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Invoice Id</th>
            <th>Date</th>
            <th>Sender Name</th>
            <th>Receiver Name</th>
            <th>Chargeable Weight</th>
            <th>Destination</th>
            <th>Price</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{getInvoiceId(invoice.city ,invoice.pdf_invoice_id)}</td>
              <td>{format(parseISO(invoice.created_at), "yyyy-MM-dd")}</td>
              <td>{invoice.invoiceData[0].sender_name}</td>
              <td>{invoice.invoiceData[0].receiver_name}</td>
              <td>{invoice.totalBoxWeight}</td>
              <td>{invoice.invoiceData[0].receiver_address}</td>
              <td>{invoice.total_price}</td>
              <td>{invoice.invoice_status}</td>
              <td className='cursor-pointer text-[#f0b913] text-lg'><Link target='_blank' to={invoice.pdfPath}><i className="fas fa-eye"></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {invoices.length > itemsPerPage ?
        <div className="flex w-fit items-center border-[1px] border-[#333537] rounded-[10px] mx-auto mt-4">
          <button className='cursor-pointer px-2 py-1 border-r-[1px] border-[#333537] hover:text-white hover:bg-[#333537] rounded-s-[8px]' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
          <span className='px-2 py-1 border-r-[1px] border-[#333537]'>{currentPage} of {totalPages}</span>
          <button className='cursor-pointer px-2 py-1 hover:text-white hover:bg-[#333537] rounded-e-[8px]' onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
        </div>
      : null
      }
    </div>
  );
};

export default PreviousInvoices;
