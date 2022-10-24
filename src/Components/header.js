import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Container,
   } from "react-bootstrap";
import logo from "./logo195.png";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <>   
      <div class="App-Nav"></div>
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/Home"> Сюжеты </Nav.Link>
                <Nav.Link href="/about"> Фотографии </Nav.Link>
                <Nav.Link href="/Contacts"> Инфо </Nav.Link>
                             </Nav>
              
                
             
            </Navbar.Collapse>
          </Container>
        
        </Navbar>
        <div class="App-Nav"></div>
        
        
        
        </>
        </React.Fragment>
        );
  }
}
