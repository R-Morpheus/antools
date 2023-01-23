import React from 'react';
import './button.css'

const MyButton = ({children, load, onClick}) => {
  return (
      <div>
        {load
            ?
            <button className='myButton__load' onClick={onClick}>
              {children}
            </button>
            :
            <button className='myButton'>
              {children}
            </button>
        }
      </div>
  );
};

export default MyButton;