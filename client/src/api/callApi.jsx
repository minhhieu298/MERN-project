import axios from "axios";
// import { config } from 'dotenv'
let BASE_URL = "http://localhost:5000/";
// config()

export const callAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
