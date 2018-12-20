import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import User from './User';
import About from './About';
import Home from './Home';

ReactDOM.render(<BrowserRouter>
<div>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Route path="/user/:userId" component={User}/>
</div>
</BrowserRouter>, document.getElementById("container"));

