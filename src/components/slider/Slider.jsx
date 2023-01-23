import React from 'react';
import './slider.css'
import manager from '../../img/manager.png'
import instrument from '../../img/instr.png'
import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'


const Slider = () => {
  return (
      <div className='slider__container'>
        <img src={arrowLeft} alt="arrow" className='arrow__left'/>
        <div className='slider__manager'>
          <img src={manager} alt="manager"/>
          <div className='manager__header'>
            <h4 className='manager__name'>Ronald Richards</h4>
            <p className='manager__job'>Product Manager</p>
          </div>
        </div>
        <div className='slider__info'>
          <img src={instrument} alt="instrument" className='slider__img'/>
          <p className='slider__description'>
            Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do.
            Velit ex tempor cillum ad sint occaecat.
            Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet.
            Sunt consectetur veniam minim ex commodo sint non.
            Occaecat aute officia excepteur non laboris id qui ad.</p>
        </div>
        <img className='arrow__right' src={arrowRight} alt="arrow"/>
        <div className='slider__icons'>
          <div className='slider__icon'></div>
          <div className='slider__icon__active'></div>
          <div className='slider__icon'></div>
        </div>
      </div>
  );
};

export default Slider;