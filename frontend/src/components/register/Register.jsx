import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import submitLogin from "../login/SubmitLogin";
import emailValidation from "./register-validation/EmailValidation";
import passwordValidation from "./register-validation/PasswordValidation";
import usernameValidaiton from "./register-validation/UsernameValidation";
import RegisterForm from "./RegisterForm";
import submitRegistration from "./SubmitRegistration";

const Register = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({ username: "", email: "", full_name: "", password: "" });
    const [apiError, setApiError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [, setToken] = useContext(UserContext);

    const [isStrength, setStrength] = React.useState(null);
    const dataHandler = async (childData) => {
        setStrength(childData);
    }

    const onProductChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
        switch (e.target.id) {
            case "username":
                usernameValidaiton(e.target.value, setUsernameError);
                break;
            case "email":
                emailValidation(e.target.value, setEmailError);
                break;
            case "password":
                passwordValidation(e.target.value, setPasswordError);
                break;
            default:
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError === "" && emailError === "") {
            submitRegistration(user, setApiError);
            const creds = { username: user.username, password: user.password }
            submitLogin(creds, setToken);
        }
    }


    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <h1 className="register-title">Register</h1>
                <RegisterForm
                    dataHandler={dataHandler}
                    onChange={onProductChange}
                    user={user}
                    usernameError={usernameError}
                    emailError={emailError}
                    passwordError={passwordError}
                />
                <br />
                {isStrength === 'Strong' &&
                    <button type="submit" className="gr__log__button"  > Create Account  </button>
                }
            </form>
        </div>
    )
}

export default Register