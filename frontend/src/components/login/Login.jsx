import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ForgotPasswordModal from "./forgot_password/ForgotPasswordModal";
import LoginForm from "./LoginForm";
import submitLogin from "./SubmitLogin";
import styles from "./Login.module.css"

const Login = () => {
    const [creds, setCreds] = useState([]);
    const [apiError, setApiError] = useState("");
    const [, setToken] = useContext(UserContext);
    const [forgotPassModal, setForgotPassModal] = useState("");
    const navigate = useNavigate();

    const toggleForgotPassModal = () => {
        setForgotPassModal(!forgotPassModal);
    }


    const onCredentialChange = (e) => {
        setCreds({ ...creds, [e.target.id]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(creds, setToken, setApiError, navigate);
    };


    return (
        <div>
            {
                forgotPassModal ?
                    <>
                        <ForgotPasswordModal toggleForgotPassModal={toggleForgotPassModal} />
                    </> :
                    <></>
            }
            <div className="column">
                <h1>Login</h1>
                <form className="box" onSubmit={handleSubmit}>
                    <LoginForm
                        onChange={onCredentialChange}
                        creds={creds}
                    />
                    <div>
                        {apiError}
                    </div>
                    <br />
                    <button className="button is-primary" type="submit">
                        Login
                    </button>
                    <button className={styles.forgotPasswordButton} onClick={toggleForgotPassModal}>Forgot Password</button>
                </form>
            </div>
        </div>
    );
};

export default Login;