import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export default api;

api.interceptors.request.use(
  (config) => {
    console.log("Request ketmoqda:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Global error:", error);
    return Promise.reject(error);
  },
);
