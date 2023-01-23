import React from 'react';
import Logo from "./logo/Logo";
import './navbar.css'
import List from "./list/List";
import Login from "./login/Login";

const Navbar = () => {
  return (
      <div className='navbar'>
        <Logo/>
        <List/>
        <Login/>
      </div>
  );
};

export default Navbar;