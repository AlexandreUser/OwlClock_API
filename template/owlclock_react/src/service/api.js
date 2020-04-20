import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

//api.interceptors.request.use(async (config) => {
//  const token = await window.localStorage.getItem("@VerticalServices:token");
//  if (token) {
//    config.headers.Authorization = `Bearer ${token}`;
//  }
//  return config;
//});

export default api;
