import Signup from './Components/Signup';
import Login from './Components/Login';
// import ArticleList from './Components/ArticleList';
// import Timecount from './Components/TimeCount';
import CreateNewPost from './Components/CreateNewPost';
import NavBar from './Components/NavBar';
import Home from './Components/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return ( <
        div className = "app-container" >
        <
        Router >
        <
        div className = "content" >
        <
        NavBar / > { /* <Timecount/> */ } <
        Switch >
        <
        Route path = "/"
        component = { Signup }
        /> <
        Route path = "/login"
        component = { Login }
        /> <
        Route path = '/newpost'
        component = { CreateNewPost }
        /> <
        Route path = "/h"
        component = { Home }
        />

        <
        /Switch> <
        /div> <
        /Router> <
        /div>
    );
}

export default App;