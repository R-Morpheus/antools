import React from 'react';
import './brands.css'
import slack from '../../img/brands/slack.svg'
import microsoft from '../../img/brands/microsoft.svg'
import google from '../../img/brands/google.svg'
import word from '../../img/brands/word-press.svg'


const Brands = () => {
  return (
      <div className='brands__container'>
        <div className='brands__block'>
          <h3 className='brands__header'>Trusted more than 150+ brand</h3>
          <div className='brands__imgs'>
            <img className='brands__img' src={microsoft} alt="brand"/>
            <img className='brands__img' src={google} alt="brand"/>
            <img className='brands__img' src={slack} alt="brand"/>
            <img className='brands__img' src={word} alt="brand"/>
          </div>
        </div>
      </div>
  );
};

export default Brands;