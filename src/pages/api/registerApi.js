import axios from "axios";

export const registerApi = axios.create({
    baseURL : 'http://localhost:8080'
});

