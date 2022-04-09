import React from 'react';
import {  Col, Container,  Nav,  Navbar, Row } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Container>
  <Row >
    <Col>
    <Navbar >
            
               <Container>  
                  <Navbar.Brand className='header' href="#home">
                     <img
                            alt=""
                             src="/logo.svg"
                             width="30"
                             height="30"
                             className="d-inline-block align-top"
                     />{' '}
     
                    <strong className='header'>SPACE</strong>
                    
                 </Navbar.Brand>
              </Container>
  </Navbar>
    </Col>
    
    <Col> 
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <Nav.Link href="#link">Story</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <Nav.Link href="#link">Contact US</Nav.Link>
    </Nav>
    </Col>
  
  </Row>
</Container>
             
        </div>
    );
};

export default Header;