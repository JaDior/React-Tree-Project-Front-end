import React from 'react';
import FormItem from '../form/FormItem';

const RegisterForm = ({ onChange, user, usernameError, emailError }) => {
    const invalidInputCss = {
        border: '4px solid red'
    };
    const validInputCss = {
        border: '1px solid black'
    };
    return (
        <div>
            <FormItem
                placeholder="Full Name"
                type="text"
                id="full_name"
                label="Full Name"
                onChange={onChange}
                value={user.full_name}
            />
            <FormItem
                placeholder="Username"
                type="text"
                id="username"
                label="Username"
                onChange={onChange}
                value={user.username}
                errorMsg={usernameError}
                inputStyle={usernameError ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Email"
                type="text"
                id="email"
                label="Email"
                onChange={onChange}
                value={user.email}
                errorMsg={emailError}
                inputStyle={emailError ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Password"
                type="text"
                id="password"
                label="Password"
                value={user.password}
                onChange={onChange}
            />
        </div>
    );
};
export default RegisterForm;
