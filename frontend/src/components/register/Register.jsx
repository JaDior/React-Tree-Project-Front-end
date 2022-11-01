import React from "react";
import { useContext, useState } from "react";

import { UserContext } from "../../context/UserContext";
import RegisterForm from "./RegisterForm";
import submitRegistration from "./SubmitRegistration";

const Register = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState("");
    const [, setToken] = useContext(UserContext);

    const onProductChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitRegistration(user, setError, setToken);
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