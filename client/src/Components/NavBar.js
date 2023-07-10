import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function NavBar({ user }) {
    return ( <
        nav className = "navbar" >
        <
        div className = "navbar-welcome" > {
            user && user.username && < span > Welcome,
            { user.username }! < /span>} <
            /div> <
            ul className = "navbar-list" >
            <
            li className = "navbar-item" >
            <
            Link to = "/"
            className = "navbar-link" > Home < /Link> <
            /li>

            <
            li className = "navbar-item" >
            <
            Link to = "/newpost"
            className = "navbar-link" > Create New Post < /Link> <
            /li> <
            li className = "navbar-item" >
            <
            Link to = "/signup"
            className = "navbar-link" > Sign Up < /Link> <
            /li> <
            li className = "navbar-item" >
            <
            Link to = "/login"
            className = "navbar-link" > Login < /Link> <
            /li> <
            li className = "navbar-item" >
            <
            Link to = "/logout"
            className = "navbar-link" > Logout < /Link> <
            /li> <
            li className = "navbar-item" >
            <
            Link to = "/about"
            className = "navbar-link" > About < /Link> <
            /li> <
            /ul>

            <
            /nav>
        );
    }

    export default NavBar;