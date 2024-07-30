import axios from './axios'

export const loginUser = async (payload) => {
    return await axios.post('/users/loginWebUser', payload);
};
export const sendEmailVerification = async (payload) => {
    return await axios.post('/users/sendEmailVerificationCode', payload);
};
export const verifyEmailCode = async (payload) => {
    return await axios.post('/users/verifyEmailCode', payload);
};
export const registerUser = async (payload) => {
    return await axios.post('/users/registerWebUser', payload);
};

export const editUserProfile = async (payload) => {
    return await axios.post('/users/editUserProfile', payload);
};
export const forgotPasword = async (payload) => {
    return await axios.post('/users/forgotPassword', payload);
};
export const verifyUserToken = async (token) => {
    return await axios.get(`/users/verifyToken/${token}`);
};
export const resetPasword = async (token, payload) => {
    return await axios.post(`/users/resetPassword/${token}`, payload );
};
export const getUserbyId = async (payload) => {
    return await axios.post(`/users/getUserById`, payload );
};