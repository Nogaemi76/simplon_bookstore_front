import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3011"
})

export default instance;