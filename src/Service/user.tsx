import { axiosClient } from "../Common/AxiosClient";
import { UserDetails, userLoginDetails } from "../models/user.model";

export async function SignUp(user: UserDetails) {
  return axiosClient.post("/api/v1/auth/register", user);
}

export const login = (user: userLoginDetails) => {
  return axiosClient.post("/api/v1/auth/login", user);
};

export async function sendOTP(req: any) {
  return axiosClient.post("/api/v1/auth/sent", req);
}

export async function verifyOtp(req: any) {
  return axiosClient.post("/api/v1/auth/verify", req);
}
