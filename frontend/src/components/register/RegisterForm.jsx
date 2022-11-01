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
                errorMsg={error.name}
                inputStyle={error.name ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Email"
                type="text"
                id="email"
                label="Email"
                onChange={onChange}
                value={user.email}
                errorMsg={error.email}
                inputStyle={error.sku ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="Full Name"
                type="text"
                id="full_name"
                label="Full Name"
                onChange={onChange}
                value={user.brand}
                errorMsg={error.brand}
                inputStyle={error.brand ? invalidInputCss : validInputCss}
            />
            <FormItem
                placeholder="password"
                type="text"
                id="password"
                label="Password"
                value={user.password}
                onChange={onChange}
                errorMsg={error.quantity}
                inputStyle={error.quantity ? invalidInputCss : validInputCss}
            />
        </div>
    );
};
export default RegisterForm;
