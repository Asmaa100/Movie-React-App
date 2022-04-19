
import axios from "axios";
const api_key = 'e4c22d4d823464fe0ede30b831837a46';
const MoviesAPI = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params:{
       api_key : 'e4c22d4d823464fe0ede30b831837a46'
    }
});

// Add a request interceptor
MoviesAPI.interceptors.request.use(
    function (config) {
        config.params = {
            ...config.params,
            api_key: api_key
        }
        
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
MoviesAPI.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default MoviesAPI;