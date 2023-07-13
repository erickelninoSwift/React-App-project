import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom";
import '../../assets/css/Main.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/image/logo.png'


const NavigationBar = () =>{

    return(
<div>

<Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand ><Link to="/"><img src={logo} className="logoImage" alt="Easy learning"/></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link ><Link to="/" className="mainMenu">Home</Link></Nav.Link>
      <Nav.Link><Link to="/Menu" className="mainMenu">Menu</Link></Nav.Link>
      <Nav.Link><Link to="/About" className="mainMenu">About</Link></Nav.Link>
      <Nav.Link ><Link to="/Contact" className="mainMenu">Contact</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar>

 </div>
    );
}


export default NavigationBar