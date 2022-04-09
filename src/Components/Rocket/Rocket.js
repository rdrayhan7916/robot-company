import React from 'react';
import './Rocket.css'
import { Card, Col } from 'react-bootstrap';

const Rocket = ({rocket}) => {
    
    return (
        <div>
            <Col>
      <Card className='rocket-card'>
        <Card.Img className='img-fluid' variant="top" src={rocket.links.mission_patch} />
        <Card.Body>
          <Card.Title>{rocket.mission_name}</Card.Title>
          <Card.Text>
          Rocket Name: {rocket.rocket.rocket_name}
          </Card.Text>
          <Card.Text>
        Launch Year: {rocket.launch_year}
          </Card.Text>
          <Card.Text>
          Upcoming: {rocket.upcoming}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Rocket;