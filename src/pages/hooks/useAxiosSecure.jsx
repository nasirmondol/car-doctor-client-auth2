import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'https://car-doctor-server-one-neon.vercel.app',
    withCredentials: true,
})
const useAxiosSecure = () => {
    useEffect(() => {
        console.log('axios secure')
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('Error tracked in the interceptor', error.response)
        })
    }, []);
    return axiosSecure;
};

export default useAxiosSecure;