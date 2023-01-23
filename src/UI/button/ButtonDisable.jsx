import React from 'react';
import './button.css'
const ButtonDisable = ({children}) => {
  return (
      <div>
        <button className='myButton__disabled'>
          {children}
        </button>
      </div>
  );
};

export default ButtonDisable;