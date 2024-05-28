import { axiosClient } from "../Common/AxiosClient";
import { UserDetails } from "../models/user.model";


export async function SignUp(user: UserDetails) {
    return axiosClient.post('/api/v1/auth/register', user)
}

interface userLoginDetails {
    email: string,
    password: string
}

export const login = (user: userLoginDetails) => {
    return axiosClient.post('/api/v1/auth/login', user).then((response) => response.data);

}

export async function sendOTP(req: any){
    return axiosClient.post('/api/v1/auth/sent', req);
}

export async function  verifyOtp(req: any){
    return axiosClient.post('/api/v1/auth/verify', req);
}

