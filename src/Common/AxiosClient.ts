import axios from "axios";

export const Base_URL = "http://localhost:8080";

export const AxiosClient = axios.create({
  baseURL: Base_URL,
});

