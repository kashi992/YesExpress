import React, { useState, useContext } from 'react'
import AuthContext from '../../services/context/AuthProvider';
import AddInvoiceForm from './addInvoiceForm';
import Button from '../../components/buttons/button';
import LoginModal from '../../components/popups/loginModal';


const AddReceipt = () => {
    const { auth } = useContext(AuthContext);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openLoginModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
           {auth.authToken ? 
                <AddInvoiceForm/>
                : 
                <div className='primaryClrBg py-[60px]'>
                    <div className="container">
                        <h2 className='fs50 text-center secondaryClr animate__animated animate__backInRight'>Login to Book a Shipment</h2>
                        <Button text="Login" onClick={openLoginModal}  className="secondaryBg text-white m-auto formBtn mt-3 animate__animated animate__backInLeft" />
                    </div>
                </div>
            }
            <LoginModal isOpen={modalIsOpen} closeModal={closeModal} />
        </>
    )
}

export default AddReceipt
