import axios from "axios";

// export const Base_URL = "http://localhost:9090";

export const axiosClient = axios.create({
  baseURL: 'https://backend-api-production-f78b.up.railway.app/',
});
