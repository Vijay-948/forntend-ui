import { AxiosClient } from "../Common/AxiosClient";


interface User {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    
}
export const SignUp = (user: User) => {
    return AxiosClient.post('/api/v1/auth/register', user).then((response) => response.data)
}

interface userLoginDetails {
    username: string,
    password: string
}

export const login = (user: userLoginDetails) => {
    return AxiosClient.post('/api/v1/auth/login', user).then((response) => response.data);

}

