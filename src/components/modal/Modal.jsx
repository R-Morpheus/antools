import React from 'react';
import './modal.css'
import MyButton from "../../UI/button/button";

const Modal = ({active, setActive, children}) => {
  return (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className='modal__content' onClick={(e) => e.stopPropagation()}>
          {children}
          <div className='modal__input__container'>
            <input type="text" className='modal__input' placeholder='username...'/>
            <input type="text" className='modal__input' placeholder='password...'/>
            <MyButton children={'Log In'}/>
          </div>
        </div>
      </div>
  );
};

export default Modal;