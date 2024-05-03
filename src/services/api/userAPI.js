import axios from './axios'

export const loginUser = async (payload) => {
    return await axios.post('/users/loginWebUser', payload);
};
export const registerUser = async (payload) => {
    return await axios.post('/users/registerWebUser', payload);
};