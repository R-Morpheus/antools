import React from 'react';
import './input.css'
import img from '../../img/search.svg'
import MyButton from "../button/button";

const Input = () => {
  return (
      <div className='input__container'>
        <img className='input__search' src={img} alt=""/>
        <input className='input' placeholder='find more than 430+ tools...'></input>
        <MyButton children={'Search'}/>
      </div>
  );
};

export default Input;