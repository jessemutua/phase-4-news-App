import React, { useState, useEffect } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ArticleList from './Components/ArticleList';
import Timecount from './Components/TimeCount';
import CreateNewPost from './Components/CreateNewPost';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Logout from './Components/Logout';
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            }
        });
    }, []);

    return ( <
            Router >
            <
            div className = 'App' >
            <
            NavBar user = { user }
            onLogout = {
                () => setUser(null) }
            /> <
            Switch >
            <
            Route exact path = "/" > {
                user ? < Home / > : < Login onLogin = { setUser }
                />} <
                /Route> <
                Route path = "/signup"
                component = { Signup }
                /> <
                Route path = "/login" > {
                    user ? < Home / > : < Login onLogin = { setUser }
                    />} <
                    /Route> <
                    Route path = "/articles"
                    component = { ArticleList }
                    /> <
                    Route path = "/timecount"
                    component = { Timecount }
                    /> <
                    Route path = "/newpost"
                    component = { CreateNewPost }
                    /> <
                    Route path = "/logout" > { user ? < Logout onLogout = {
                            () => setUser(null) } /> : <Login onLogin={setUser} / > } <
                    /Route> <
                    /Switch> <
                    /div> <
                    /Router>
                );
            }

            export default App;