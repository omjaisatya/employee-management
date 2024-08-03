import axios from "axios";

const API = process.env.REACT_APP_API;

const axiosInstance = axios.create({ baseURL: API });

export default axiosInstance;

// NOT WORKING WITH API SO I LEAVE IT AS IT
