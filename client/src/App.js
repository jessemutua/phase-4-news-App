import Signup from './Components/Signup';
import Login from './Components/Login';
import ArticleList from './Components/ArticleList';
import Timecount from './Components/TImeCount';
import CreateNewPost from './Components/CreateNewPost';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return ( <
        div className = "app-container" >
        <
        Router >
        <
        div className = "content" > { /* <Timecount/> */ } <
        Switch >
        <
        Route path = "/signup"
        component = { Signup }
        /> <
        Route path = "/login"
        component = { Login }
        /> <
        Route path = "/n"
        component = { ArticleList }
        /> <
        Route path = '/'
        component = { CreateNewPost }
        /> <
        /Switch> <
        /div> <
        /Router> <
        /div>
    );
}

export default App;