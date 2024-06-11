import { axiosClient } from "../Common/AxiosClient";


export async function verifyEmail(req: any) {
    return axiosClient.post('/reset/sent', req);
}

export async function resetPassword(req: any) {
    return axiosClient.post('/reset/password', req);
}