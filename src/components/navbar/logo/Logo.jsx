import React from 'react';
import img from '../../../img/logo.svg'
import './logo.css'

const Logo = () => {
  return (
      <div className='logo__container'>
        <img src={img} alt="logo"/>
      </div>
  );
};

export default Logo;