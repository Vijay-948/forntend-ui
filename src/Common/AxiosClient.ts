import axios from "axios";

export const Base_URL = "http://localhost:9090";

export const AxiosClient = axios.create({
  baseURL: Base_URL,
});
