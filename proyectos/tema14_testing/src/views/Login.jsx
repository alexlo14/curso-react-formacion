// archivo src/views/Login.jsx

import UserInput from "../components/login/UserInput"
import LoginButton from "../components/login/LoginButton"
import PasswordInput from "../components/login/PasswordInput"

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <UserInput />
            <PasswordInput />
            <LoginButton />
        </>
    )
}

export default Login
