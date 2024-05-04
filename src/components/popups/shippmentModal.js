import React from 'react';
import Modal from 'react-modal';
import CustomInput from '../customInput/customInput';
import LinkButton from '../../components/buttons/linkButton';

Modal.setAppElement('#root');

const ShipmentModal = ({ isOpen, closeModal }) => {
    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={closeModal}
            className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[780px] z-20 secondaryBg px-12 py-14 shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
            contentLabel="Shipment Modal"
        >
          <i className="fas fa-times text-white cursor-pointer absolute top-3 right-3 z-10" onClick={closeModal}></i>
          <h2 className='text-[30px] font-semibold text-white mb-12'><span className='text-[#f0b913]'>Shipment </span> Tracker</h2>
            <form action="" className='flex gap-3 items-center max-w-[565px] w-full'>
              <input type="text" className='bg-[#262829] h-[40px] w-full rounded-[3px] py-2 px-4 fsSm text-white placeholder:text-white' placeholder="Insert Tracking Number Here" />
              <LinkButton text="Track It" className="bg-[#f0b913] uppercase text-white text-nowrap h-[40px] hover:bg-white hover:text-[#262829]" />
            </form>
            
        </Modal>
    );
};

export default ShipmentModal;
