import React from 'react';
import './tool.css'
import fav from '../../../img/tools/favorites.svg'
import dir from '../../../img/tools/folder.svg'
import ButtonDisable from "../../../UI/button/ButtonDisable";


const Tool = ({icon, name, price, description, style }) => {
  return (
      <div className='tool__container' style={style}>
        <div className='tool__header'>
          <img className='tool__icon' src={icon} alt="icon"/>
          <h3 className='tool__h3'>{name}
            <p className='tool__price'>{price}</p>
          </h3>
        </div>
        <div className='tool__description'>
          <p>{description}</p>
        </div>
        <div className='tool__option'>
          <div className='tool__option__icons'>
            <img className='tool__option__icon' src={fav} alt="icon"/>
            <img className='tool__option__icon' src={dir} alt="icon"/>
          </div>
          <ButtonDisable children={'Visit'} disabled={true}/>
        </div>
      </div>
  );
};

export default Tool;