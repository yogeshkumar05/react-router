import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

const container=document.getElementById("container");

const App = () => {return ( <div>
   <Route path="/" component={NavMenu}/>
   <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
   <Route path="/categories" component={Categories}/>
  
   <Route path="/contact" component={Contact}/>
   
</div>)}

const Home = () =>
{
    return <div>Home</div>
}

const Categories = () =>
{
    return <div>categories</div>
}

const About = () =>
{
    return <div>About</div>
}

const Contact = () =>
{
    return <div>Contact</div>
}

const NavMenu = () =>
{
    return (<div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/contact">Contact</NavLink>

    </div>)
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, container);