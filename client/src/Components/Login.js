import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            // ... handle login logic ...
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return ( <
        div className = "login-container" >
        <
        h2 > Login < /h2> <
        form onSubmit = { handleSubmit }
        className = "login-form" >
        <
        div className = "form-group" >
        <
        label htmlFor = "username" > Username: < /label> <
        input type = "text"
        id = "username"
        value = { username }
        onChange = { handleUsernameChange }
        /> <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "password" > Password: < /label> <
        input type = "password"
        id = "password"
        value = { password }
        onChange = { handlePasswordChange }
        /> <
        /div> <
        button type = "submit" > Login < /button> <
        /form> <
        /div>
    );
}

export default Login;