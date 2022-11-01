import React from 'react';
import FormItem from '../form/FormItem';

const LoginForm = ({ onChange, creds }) => {
    return (
        <div>
            <FormItem
                placeholder="Username"
                type="text"
                id="username"
                label="Username"
                onChange={onChange}
                value={creds.username}
            />
            <FormItem
                placeholder="Password"
                type="password"
                id="password"
                label="Password"
                onChange={onChange}
                value={creds.password}
            />
        </div>
    );
};
export default LoginForm;
