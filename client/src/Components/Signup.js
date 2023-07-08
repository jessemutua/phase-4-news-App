import React, { useState } from 'react';
import '../styles/signup.css'

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform signup logic here
    };

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
        /form> <
        /div>
    );
}

export default Signup;