

import React, { useState, useContext } from "react";

import ErrorMessage from "../ErrorMessage";
import { UserContext } from "../../context/UserContext";
import LoginForm from "./LoginForm";
import submitLogin from "./SubmitLogin";

const Login = () => {
    const [creds, setCreds] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const onCredentialChange = (e) => {
        setCreds({ ...creds, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(creds, setToken, setErrorMessage);
    };

    return (
        <div className="column">
            <h1>Login</h1>
            <form className="box" onSubmit={handleSubmit}>
                <LoginForm
                    onChange={onCredentialChange}
                    creds={creds}
                />
                <div>
                    {errorMessage}
                </div>
                <br />
                <button className="button is-primary" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;