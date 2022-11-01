

import React, { useState, useContext } from "react";

import ErrorMessage from "../ErrorMessage";
import { UserContext } from "../../context/UserContext";
import LoginForm from "./LoginForm";

const Login = () => {
    const [creds, setCreds] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [, setToken] = useContext(UserContext);

    const onCredentialChange = (e) => {
        setCreds({ ...creds, [e.target.id]: e.target.value });
    };

    const submitLogin = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(
                `grant_type=&username=${creds.username}&password=${creds.password}&scope=&client_id=&client_secret=`
            ),
        };

        const response = await fetch("/token", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            setErrorMessage(data.detail);
        } else {
            setToken(data.access_token);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin();
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