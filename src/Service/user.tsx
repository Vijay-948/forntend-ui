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

