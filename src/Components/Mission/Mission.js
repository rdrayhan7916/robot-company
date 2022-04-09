import React from 'react';
import rocket from '../../Img/rocket.png'
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Mission.css'
const Mission = () => {
    return (
        <div>
            <Container>
            <h1 className='discover'>Discover Univerce</h1>
            <Row xs={1} md={3} className="g-5">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card className='card'>
        <Card.Img className='rocket' variant="top" src={rocket} />
        <Card.Body>
          <Card.Title>Mission BD</Card.Title>
          <Card.Text>
          At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</Container>
        </div>
    );
};

export default Mission;