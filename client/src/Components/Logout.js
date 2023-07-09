import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
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

            if (response.ok) {

                history.push('/login');
                alert("Logged out")
            } else {

                alert('Failed to logout');
            }
        } catch (error) {

            console.error('Error logging out:', error);
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