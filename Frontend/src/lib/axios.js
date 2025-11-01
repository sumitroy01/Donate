// src/lib/axios.js
import axios from "axios";

const API_BASE = import.meta.env.VITE_BACKEND_URI
  || (import.meta.env.MODE === "development" && "http://localhost:3000")
  || "https://donate-backend-f2bn.onrender.com";

export const axiosInstance = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
});
