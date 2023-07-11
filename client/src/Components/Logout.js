import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from './Login';

function Logout() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const history = useHistory();

    useEffect(() => {
        logoutUser();
    });

    async function logoutUser() {
        try {

            const response = await fetch('/logout', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',

                },
            });
            setIsLoggedIn(false);
            alert("Logged out, Refresh to open login page")

        } catch (error) {

            console.error('Error logging out:', error);
        }
        if (!isLoggedIn) {
            return <Login / >

        }

    }

    return ( <
        div >
        <
        h2 > Logging Out... < /h2> <
        /div>
    );
}

export default Logout;