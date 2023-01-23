import React from 'react';
import MyButton from "../../../UI/button/button";
import './login.css'

const Login = () => {
  return (
      <div className='login__container'>
        <a className='login__btn' href="src/components/navbar/login">Login</a>
        <MyButton>Sign Up</MyButton>
      </div>
  );
};

export default Login;