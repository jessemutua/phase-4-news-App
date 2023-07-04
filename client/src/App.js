import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return ( <
        div >
        <
        Router >
        <
        div >
        <
        Switch >
        <
        Route path = "/mjhg"
        component = { Signup }
        /> <
        Route path = "/"
        component = { Login }
        /> <
        /Switch> <
        /div> <
        /Router> <
        /div>
    );
}

export default App;