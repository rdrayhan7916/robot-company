import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            <h1 className='mt-5 mb-5'>Newsletter</h1>
            <div className='subscribe'>
                
            <input type='email'
            placeholder='Email adress'
            className='w-50'
            ></input><button className='btn'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-around mt-5 '>
                <b>SPACE</b>
                <p>Space 2020, All rights reserved.</p>
                <p className='icon'>
                    <i class="fa-brands fa-twitter-square mx-3"></i>
                    <i class="fa-brands fa-facebook-square mx-3"></i>
                    <i class="fa-brands fa-linkedin mx-3"></i>
                </p>
            </div>
        </div>
    );
};

export default Footer;