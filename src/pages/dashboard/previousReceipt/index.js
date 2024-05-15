// CustomTableComponent.jsx
import React, {useState} from 'react';
import './index.scss';

const data = [
  {
    invoiceId: "1",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "2",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "3",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "4",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "5",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "6",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "7",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "8",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "9",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "10",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "11",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "12",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "13",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "14",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "15",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "16",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "17",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "18",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "19",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
  {
    invoiceId: "20",
    senderName: "Hamilton",
    receiverName: "Hamilton",
    price: "$115",
    chargeableWeight: "2 kg",
    date: "01/01/2024",
    destination: "Australia",
  },
];

const PreviousInvoices = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Change this value to adjust items per page

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='customTable px-12 py-6 h-full overflow-y-auto bannerBg' style={{height: "auto"}}>
      <h1 className='text-[2.5rem] font-semibold mb-4'>Previous invoices</h1>
      <table className='w-full'>
        <thead>
          <tr>
            <th>Invoice Id</th>
            <th>Sender Name</th>
            <th>Receiver Name</th>
            <th>Price</th>
            <th>Chargeable Weight</th>
            <th>Date</th>
            <th>Destination</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row, index) => (
            <tr key={index}>
              <td>{row.invoiceId}</td>
              <td>{row.senderName}</td>
              <td>{row.receiverName}</td>
              <td>{row.price}</td>
              <td>{row.chargeableWeight}</td>
              <td>{row.date}</td>
              <td>{row.destination}</td>
              <td className='cursor-pointer'><i class="far fa-eye"></i></td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="flex w-fit items-center border-[1px] border-[#333537] rounded-[10px] mx-auto mt-4">
        <button className='cursor-pointer px-2 py-1 border-r-[1px] border-[#333537] hover:text-white hover:bg-[#333537] rounded-s-[8px]' onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span className='px-2 py-1 border-r-[1px] border-[#333537]'>{currentPage} of {totalPages}</span>
        <button className='cursor-pointer px-2 py-1 hover:text-white hover:bg-[#333537] rounded-e-[8px]' onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PreviousInvoices;
