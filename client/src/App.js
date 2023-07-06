import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ArticleList from './Components/ArticleList';
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
        Route path = "/jhgf"
        component = { Login }
        /> <
        Route path = "/"
        component = { ArticleList }
        /> <
        /Switch> <
        /div> <
        /Router> <
        /div>
    );
}

export default App;