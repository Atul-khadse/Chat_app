import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: "https://chat-app-3-h7o1.onrender.com",
    withCredentials: true,
});