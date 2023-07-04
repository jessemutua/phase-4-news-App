import React, { useState } from 'react';

function Signup() {
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
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // User created successfully
                console.log('User created!');
                // Reset form fields
                setUsername('');
                setPassword('');
            } else {
                // Handle error case
                alert('Failed to create user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return ( <
        div >
        <
        h2 > Signup < /h2> <
        form onSubmit = { handleSubmit }
        id = 'form' >
        <
        div >
        <
        label > Username < /label> <
        input type = "text"
        value = { username }
        onChange = { handleUsernameChange }
        /> <
        /div> <
        div >
        <
        label > Password < /label> <
        input type = "password"
        value = { password }
        onChange = { handlePasswordChange }
        /> <
        /div> <
        button type = "submit" > Signup < /button> <
        /form> <
        /div>
    );
}

export default Signup;