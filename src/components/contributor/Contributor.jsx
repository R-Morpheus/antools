import React from 'react';
import './contributor.css'
import Input from "../../UI/input/Input";

const Contributor = () => {
  return (
      <div className='contributor__container'>
        <div className='contributor__block'>
          <h3 className='contributor__header'>Become a contributor?</h3>
          <p className='contributor__info'>Join us and get tips & tricks to become a great Designer and Developer</p>
          <Input placeholder={'Enter you email...'} search={false} children={'Join Us'}/>
        </div>
      </div>
  );
};

export default Contributor;