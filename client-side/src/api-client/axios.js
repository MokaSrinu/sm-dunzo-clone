import axios from "axios";
import { API_BASE_URL } from "../../constants";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => Promise.reject(error)
);
