import React from 'react'
import Modal from 'react-modal';
const ShippmentModal = ({ isOpen, closeModal }) => {
  return (
    <div>
       <Modal isOpen={isOpen} onRequestClose={closeModal}
      className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 w-[460px] z-20 secondaryBg px-6 pt-8 pb-4  shadow-lg shadow-black rounded-[5px] focus-visible:outline-none"
      contentLabel="Shippment Modal">
          <h1>sss</h1>
      </Modal>
    </div>
  )
}

export default ShippmentModal
