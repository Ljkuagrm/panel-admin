import axios from "axios";

export const registerApi = axios.create({
    baseURL : 'https://apirest-dapper-mens.up.railway.app'
});

