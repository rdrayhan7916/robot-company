import React from 'react';
import robot from '../../Img/robot.png'
import { Col, Container, Row} from 'react-bootstrap';
import './Banner.css'
import Header from '../Header/Header';

const Banner = () => {
    return (
        <div className='banner'>
            <Container>
                <Header></Header>
  <Row className='' >
    <Col  className='banner-1'>
    <b className='welcome'>
        Welcome to Settla
    </b>
    <h1 className='space'>SPACE FOR<br></br>
        EVERYONE</h1>
        <p className='at'>At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
    
    <button className="start-btn">GET START</button>
    </Col>
    <Col>
    <img className='robot' alt='' src={robot}></img>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Banner;