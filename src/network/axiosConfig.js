import axios from "axios";
 const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=e4c22d4d823464fe0ede30b831837a46',
    // headers: {"Authorization" : `Bearer ${token}`},
    // timeout: 10000,
  });
  


  export default axiosInstance;
