import React, {useState} from 'react';
import './list.css'
import vector from '../../../img/tools/chevron.svg'
const List = () => {
  const categories = ['#1', '#2', '#3']
  const [open, setOpen] = useState(false)

  const preventDef = (e) =>{
    e.preventDefault()
  }

  const openHandler = (e) => {
    e.preventDefault()
    setOpen((open) => !open )
  }

  return (
      <div className='navbar__list'>
        <a className='navbar__item' href="src/components/navbar" onClick={preventDef}>Home</a>
        <a className='navbar__item category' href="src/components/navbar" onClick={openHandler}>Categories</a>
        {open && (
            <div className='navbar__menu' onClick={preventDef}>
              <ul id='menu'>
                {categories.map((category) => (
                        <li id='menu__item' key={category} onClick={() => setOpen(false)}>{category}</li>
                    )
                )}
              </ul>
            </div>
        )}
        <img className='navbar__vector' src={vector} alt="vector"/>
        <a className='navbar__item' href="src/components/navbar" onClick={preventDef}>My collection</a>
        <a className='navbar__item' href="src/components/navbar" onClick={preventDef}>Blog</a>
      </div>
  );
};

export default List;