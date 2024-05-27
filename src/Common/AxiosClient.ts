import axios from "axios";

// export const Base_URL = "http://localhost:9090";

export const axiosClient = axios.create({
  baseURL: 'http://localhost:9090',
});
