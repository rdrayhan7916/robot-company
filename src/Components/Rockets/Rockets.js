import React, { useEffect, useState } from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Rocket from '../Rocket/Rocket';
import './Rockets.css'

const Rockets = () => {
const [rockets, setRockets]= useState([])
const [searchText, setSearchText]=useState('')
const [displayRockets, setDisplayRockets]=useState([])


const handleSearch =()=>{
  const matcheRocket =rockets.filter(rocket=>rocket.mission_name.toLowerCase().includes(searchText.toLowerCase()))
  setDisplayRockets(matcheRocket)
  console.log(matcheRocket)
  console.log(displayRockets)
}

useEffect(()=>{
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res=>res.json())
    .then(data=>{
      setRockets(data)
       setDisplayRockets(data)
    })
},[])
    return (
        <div className='rockets-part pt-5 mt-5'>
            {/* Rockets-header-part-start */}
            
            <Container className='rocket-header'>
            <Navbar expand="lg" >
              <Container fluid>
            <Navbar.Brand>Is upcoming?</Navbar.Brand>
            <Navbar.Brand> Yes <button className='down-btn'><NavDropdown  id="navbarScrollingDropdown">
            <Navbar.Toggle aria-controls="navbarScroll" />
          <NavDropdown.Item >No</NavDropdown.Item>
        </NavDropdown></button></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll responsive-navbar-nav">
        <Navbar.Brand>Launch year?</Navbar.Brand>
        <Navbar.Brand> 2001-2005<button className='down-btn'><NavDropdown  id="navbarScrollingDropdown">
          <NavDropdown.Item >2001-2005</NavDropdown.Item>
        </NavDropdown></button></Navbar.Brand>
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
    
      <Form className="d-flex">
        <FormControl
       onBlur={(e)=>{setSearchText(e.target.value)}}
          type="search"
          placeholder="Search"
          className="me-2 searchText"
          aria-label="Search"
        />
        <Button onClick={handleSearch} variant="outline-success">Search</Button>
      </Form>
      </Navbar.Collapse>
      </Container>
</Navbar>
</Container >
{/* Rockets-header-part-end */}

<Container>

            <Row xs={1} md={4} className="g-5">
            {displayRockets.slice(0, 8).map(rocket=><Rocket
            rocket={rocket}
            key={rocket.flight_number}
            >

            </Rocket>)}
</Row>
<p className='p-5'>1   2   3   .   .  10</p>
</Container>



        </div>
    );
};

export default Rockets;