import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import submitLogin from "../login/SubmitLogin";
import emailValidation from "./register-validation/EmailValidation";
import usernameValidaiton from "./register-validation/UsernameValidation";
import RegisterForm from "./RegisterForm";
import submitRegistration from "./SubmitRegistration";

const Register = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({ username: "", email: "", full_name: "", password: "" });
    const [apiError, setApiError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [, setToken] = useContext(UserContext);

    const onProductChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
        switch (e.target.id) {
            case "username":
                usernameValidaiton(e.target.value, setUsernameError);
                break;
            case "email":
                emailValidation(e.target.value, setEmailError);
                break;
            default:
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (usernameError === "" && emailError === "") {
            submitRegistration(user, setApiError, setToken);
            const creds = { username: user.username, password: user.password }
            submitLogin(creds, setToken);
        }
    }


    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <h1 className="register-title">Register</h1>
                <RegisterForm
                    onChange={onProductChange}
                    user={user}
                    usernameError={usernameError}
                    emailError={emailError}
                />
                <br />
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}

export default Register