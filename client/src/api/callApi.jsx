import axios from "axios";
// import dotenv from 'dotenv'
let BASE_URL = "http://localhost:5000/";

export const callAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
