import axios from "axios";
// export const Base_URL = "http://localhost:8080";

const AxiosClient = axios.create({
  baseURL: "http://localhost:8085",
});

export default AxiosClient;
