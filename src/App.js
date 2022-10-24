import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from "./Components/header.js";
//import { Routes, Route } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Cont';
import logo from "./Components/logo195.png";
//import Header from './Components/header';
import {
  Navbar,
  Nav,
  Container,
   } from "react-bootstrap";



function App() {
  
  return (

    

    <>
    

    <Router>
        <div>
    <div className="App-Nav"></div>
          <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              Путешествуя по...
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav className="App-Nav">
                <NavLink to="/Home" className="App-Nav"> Сюжеты </NavLink>
                <NavLink to="/About" className="App-Nav"> Фотографии </NavLink>
                <NavLink to="/Contacts" className="App-Nav"> Инфо </NavLink>
                </Nav>
              
                <div className="App-Nav"></div>
             
            </Navbar.Collapse>
          </Container>
        
        </Navbar>
        <div className="App-Nav"></div>
        
     
      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
      
      <Route exact path="/" className="App-Nav">
            < Home/>
        </Route>
        <Route path="/Home" className="App-Nav">
          <Home />
        </Route>
        <Route path="/About" className="App-Nav">
          <About />
        </Route>
        <Route path="/Contacts" class="App-Nav">
          <Contacts />
        </Route>
       
      </Switch>
    </div>
  </Router>
  </>
);
}

export default App;
