import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return ( <
        nav >
        <
        ul >
        <
        li >
        <
        Link to = "/" > Home < /Link> <
        /li> <
        li >
        <
        Link to = "/signup" > Sign Up < /Link> <
        /li> <
        li >
        <
        Link to = "/login" > Login < /Link> <
        /li> <
        li >
        <
        Link to = "/new-post" > Create New Post < /Link> <
        /li> <
        li >
        <
        Link to = "/logout" > Logout < /Link> <
        /li> <
        /ul> <
        /nav>
    );
}

export default NavBar;