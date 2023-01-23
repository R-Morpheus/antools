import React from 'react';
import './input.css'
import img from '../../img/search.svg'
import MyButton from "../button/button";

const Input = ({placeholder, search, children}) => {
  return (
      <div className='input__container'>
        {search && <img className='input__search' src={img} alt=""/>}
        <input className='input' placeholder={placeholder}></input>
        <MyButton children={children}/>
      </div>
  );
};

export default Input;