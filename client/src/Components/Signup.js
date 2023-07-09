import React, { useState } from 'react';
import '../styles/signup.css'
import { Link } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Perform any necessary signup success actions
                console.log('Signup successful');
                // Reset form fields
                setUsername('');
                setPassword('');
            } else {
                // Handle signup failure case
                console.error('Signup failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return ( <
        div className = "signup-container" >
        <
        form className = "signup-form"
        onSubmit = { handleSubmit } >
        <
        h2 > Sign Up < /h2> <
        div className = "form-group" >
        <
        label htmlFor = "username" > Username: < /label> <
        input type = "text"
        id = "username"
        value = { username }
        onChange = {
            (e) => setUsername(e.target.value) }
        required /
        >
        <
        /div> <
        div className = "form-group" >
        <
        label htmlFor = "password" > Password: < /label> <
        input type = "password"
        id = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        required /
        >
        <
        /div> <
        button type = "submit" > Sign Up < /button> <
        p > Already have an account ? < Link to = "/login" > Login < /Link></p >
        <
        /form> { /* Login link */ }

        <
        /div>
    );
}

export default Signup;