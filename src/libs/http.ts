import axios, {AxiosRequestConfig} from "axios";

const config:AxiosRequestConfig = {
    baseURL: "/apiV1",
    withCredentials: false,
    responseType: 'json',
    responseEncoding: 'utf8',
}; 
const http =  axios.create(config);


export default http;