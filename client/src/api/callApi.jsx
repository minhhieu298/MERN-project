import axios from "axios";
let BASE_URL = "http://localhost:5000/";

export const callAPI = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  withCredentials: true,
});
