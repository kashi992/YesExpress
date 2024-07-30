import axios from "./axios";


export const addInvoice = async (payload) => {
    return await axios.post('/invoices/addInvoice', payload);
};
export const addProducts = async (payload) => {
    return await axios.post('/products/addproduct', payload);
};
export const uploadProductImage = async (payload) => {
    return await axios.post('/images/upload', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    });
};
export const addProductImage = async (payload) => {
    return await axios.post('/images/addproductimage', payload);
};

export const addPaymentReceipt = async (payload) => {
    return await axios.post('/images/addPaymentReceipt', payload);
};
export const generatePDFInvoice = async (payload) => {
    return await axios.post('/pdf/generatepdf', payload);
};
export const trackInvoice = async (payload) => {
    return await axios.post('/invoices/trackShipment', payload);
};
export const getQuote = async (payload) => {
    return await axios.post('/invoices/getQuote', payload);
};
export const calculateInvoicePrice = async (payload) => {
    return await axios.post('/invoices/calculateInvoicePrice', payload);
};
export const getInvoices = async (payload) => {
    return await axios.post('/invoices/getInvoices', payload);
};