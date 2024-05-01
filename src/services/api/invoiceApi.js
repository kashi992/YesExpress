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
export const generatePDFInvoice = async (payload) => {
    return await axios.post('/pdf/generatepdf', payload);
};