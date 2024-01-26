import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import '../Components/NavBar.css'
export const NavBar = () => {
  return (
      <>
      <div className='bb'>
    <Navbar expand="lg" bg='dark' className='text-danger' style={{height:'90px',boxShadow:'0 0px 50px #ffcc00'}}>
      <Container>
        <Navbar.Brand href="#home"style={{color:'	#ffcc00'}}><h2>PortFolio</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav ml-auto">
            <div className="justify-content-end flex-grow-1 pe-auto">
          <Nav className="ml-auto justify-content-end">
           <Nav.Link as={Link} to='/' style={{color:'	#ffcc00'}}>Home</Nav.Link>
            <Nav.Link as={Link} to='/About' style={{color:'	#ffcc00'}}>About</Nav.Link>
           <Nav.Link as={Link} to='/Skills' style={{color:'	#ffcc00'}}>Skills</Nav.Link>
          <Nav.Link as={Link} to='/Resume' style={{color:'	#ffcc00'}}>Resume</Nav.Link> 
           <Nav.Link as={Link} to='/Projects' style={{color:'	#ffcc00'}}>Projects</Nav.Link>
           <Nav.Link as={Link} to='/Contact' style={{color:'	#ffcc00'}}>Contact Us</Nav.Link>
        
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>
      </>
  )
}
