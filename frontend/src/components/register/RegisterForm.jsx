import React from 'react';
import FormItem from '../form/FormItem';

const RegisterForm = ({ onChange, user, error }) => {
    const invalidInputCss = {
        border: '2px solid red'
    };
    const validInputCss = {
        border: '1px solid black'
    };
    return (
        <div>
            <FormItem
                placeholder="Username"
                type="text"
                id="username"
                label="Username"
                onChange={onChange}
                value={user.username}
                errorMsg={error.username}
                inputStyle={error.username ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Email"
                type="text"
                id="email"
                label="Email"
                onChange={onChange}
                value={user.email}
                errorMsg={error.email}
                inputStyle={error.email ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Full Name"
                type="text"
                id="full_name"
                label="Full Name"
                onChange={onChange}
                value={user.full_name}
                errorMsg={error.full_name}
                inputStyle={error.full_name ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Password"
                type="text"
                id="password"
                label="Password"
                value={user.password}
                onChange={onChange}
                errorMsg={error.password}
                inputStyle={error.password ? invalidInputCss : validInputCss}
            />
        </div>
    );
};
export default RegisterForm;
