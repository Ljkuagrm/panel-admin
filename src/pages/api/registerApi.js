import axios from "axios";

export const registerApi = axios.create({
    baseURL : 'http://apirest-dapper-mens.up.railway.app'
});

