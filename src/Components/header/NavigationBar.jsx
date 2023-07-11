import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../assets/css/Main.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';


const NavigationBar = () =>{

    return(
       <div>

      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/Menu">Menu</Link></Nav.Link>
            <Nav.Link><Link to="/About">About</Link></Nav.Link>
            <Nav.Link ><Link to="/Contact">Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

       </div>
    );


}


export default NavigationBar