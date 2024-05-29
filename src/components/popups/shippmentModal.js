import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Button from '../../components/buttons/button';
import { trackInvoice } from '../../services/api/invoiceApi';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const ShipmentModal = ({ isOpen, closeModal }) => {
  const  [modalOpen, setModalOpen] = useState(isOpen);
  const  [invoiceId, setInvoiceId] = useState('');
  const  [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const searchInvoice = async () => {
    if(invoiceId){
      setErrorMessage('')
      const trackPayload={
        "invoiceId": invoiceId,
      }
      try {
        const response = await trackInvoice(trackPayload);
        const isSuccess = response?.data?.status;
        if (isSuccess) {
          closeModal()
          navigate(`/track-shipment/${invoiceId}`);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage('No invoice exist for the given id');
        } else {
          console.error('An error occurred while fetching data: ', error);
        }
      }      
    }
    else{
      setErrorMessage('Enter an Invoice ID first')
    }
  }

  useEffect(()=>{
    setModalOpen(isOpen)
  }, [isOpen])

  return (
      <Modal 
          isOpen={modalOpen}
          onRequestClose={closeModal}
          className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[780px] z-20 secondaryBg px-12 py-14 shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
          contentLabel="Shipment Modal"
      >
        <i className="fas fa-times text-white cursor-pointer absolute top-3 right-3 z-10" onClick={closeModal}></i>
        <h2 className='fs30 font-semibold text-white mb-12'><span className='text-[#f0b913]'>Shipment </span> Tracker</h2>
          <div className='flex gap-3 items-center w-full'>
            <input onInput={(event)=> setInvoiceId(event.target.value)} type="text" className='bg-[#262829] h-[40px] w-full rounded-[3px] py-2 px-4 fs14 text-white placeholder:text-white' placeholder="Insert Tracking Number Here" />
            <Button onClick={searchInvoice} text="Track It" className="bg-[#f0b913] uppercase text-white text-nowrap h-[40px] hover:bg-white hover:text-[#262829]"/>
          </div>
          <p className='text-red-500 mt-2'>{errorMessage}</p>
          
      </Modal>
  );
};

export default ShipmentModal;
