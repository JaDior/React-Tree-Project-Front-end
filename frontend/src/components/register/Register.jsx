import React from "react";
import { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";
import RegisterForm from "./RegisterForm";

const Register = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [, setToken] = useContext(UserContext);

    const onProductChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const submitRegistration = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ username: user.username, email: user.email, full_name: user.full_name, hashed_password: user.password })
        };

        const response = await fetch('register/', requestOptions);
        const data = await response.json();

        if (!response.ok) {
            setError(data.detail);
        } else {
            setToken(data.access_token)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitRegistration();
    }


    return (
        <div className="register-form">
            <form onSubmit={handleSubmit}>
                <h1 className="register-title">Register</h1>
                <RegisterForm
                    onChange={onProductChange}
                    user={user}
                    error={error}
                />
                <div>{error}</div>
                <br />
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}

export default Register