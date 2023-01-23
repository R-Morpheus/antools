import React from 'react';
import './footer.css'
import logo from '../../img/logo.svg'

const Footer = () => {
  return (
      <div className='footer'>
        <div className='footer__item'>
          <img src={logo} alt="logo" className='footer__logo'/>
          <p className='copyright'>Copyright 2021. Antools</p>
          <p className='footer__p'>Antool is a web collection of information on paid or free Design and Development tools</p>
        </div>
        <div className='footer__item'>
          <h4 className='copyright'>Contact Us</h4>
          <p className='footer__p'>+621987463</p>
          <p className='footer__p'>M Building, No.10 A</p>
          <p className='footer__p'>antools@awesome.com</p>
        </div>
        <div className='footer__item'>
          <h4 className='copyright'>Categories</h4>
          <p className='footer__p'>Design</p>
          <p className='footer__p'>Development</p>
        </div>
        <div className='footer__item'>
          <h4 className='copyright'>Company info</h4>
          <p className='footer__p'>About Us</p>
          <p className='footer__p'>Our Partners</p>
          <p className='footer__p'>Blog</p>
        </div>
      </div>
  );
};

export default Footer;