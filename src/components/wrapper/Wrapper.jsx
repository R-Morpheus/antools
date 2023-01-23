import React from 'react';
import './wrapper.css'
import Input from "../../UI/input/Input";
import illustration from '../../img/Illustration.png'
import facebook from '../../img/facebook.svg'
import instagram from '../../img/insta.svg'
import twitter from '../../img/twitter.svg'


const Wrapper = () => {
  return (
      <div className='wrapper__container'>
        <div className='wrapper__block'>
          <h1 className='wrapper__header'>Awesome tools for Designer & Developer<span className="orange">.</span></h1>
          <p className='wrapper__description'>Antool is a web collection of information on paid or free Design and
            Development tools</p>
          <Input placeholder={'find more than 430+ tools...'} search={true} children={'Search'}/>
          <div className='social__icons'>
            <img className='social__icon' src={facebook} alt=""/>
            <img className='social__icon' src={instagram} alt=""/>
            <img className='social__icon' src={twitter} alt=""/>
          </div>
        </div>
        <div className='wrapper__illustration'>
          <img src={illustration} alt="Illustration"/>
        </div>
      </div>
  );
};

export default Wrapper;