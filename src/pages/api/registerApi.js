import axios from "axios";

export const registerApi = axios.create({
    baseURL : 'https://elfin-rain-production.up.railway.app'
});

