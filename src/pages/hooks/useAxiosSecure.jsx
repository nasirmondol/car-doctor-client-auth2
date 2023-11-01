import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
})
const useAxiosSecure = () => {
    useEffect(() => {
        console.log('axios secure')
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('helo')
            console.log('Error tracked in the interceptor', error.response)
        })
    }, [axiosSecure]);
    return axiosSecure;
};

export default useAxiosSecure;