import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                setIsLoggedIn(true);
            } else {
                alert('Failed to log in');
            }
        } catch (error) {
            alert('Error:', error);
        }
    }

    return ( <
        div >
        <
        h2 > Login < /h2> <
        form onSubmit = { handleLogin } >
        <
        div >
        <
        label > Username < /label> <
        input type = "text"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        /> <
        /div> <
        div >
        <
        label > Password < /label> <
        input type = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /div> <
        button type = "submit" > Login < /button> <
        /form> {
            isLoggedIn && < p > You are logged in ! < /p>} <
                /div>
        );
    }

    export default Login;