import React from 'react';
import './button.css'

const MyButton = ({children, load, onClick, onClickHandler}) => {
  console.log(onClickHandler)
  return (
      <div>
        {load
            ?
            <button className='myButton__load' onClick={onClick}>
              {children}
            </button>
            :
            <button className='myButton' onClick={onClickHandler}>
              {children}
            </button>
        }
      </div>
  );
};

export default MyButton;