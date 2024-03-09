import { AxiosClient } from "../Common/AxiosClient";

const SignUp = (user) => {

    return AxiosClient.post('/api/v1/auth/register', user).then((response) => response.data)

}

export default SignUp;