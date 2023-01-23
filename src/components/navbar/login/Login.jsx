import React, {useState} from 'react';
import MyButton from "../../../UI/button/button";
import './login.css'
import Modal from "../../modal/Modal";

const Login = () => {
  const [regModalActive, setRegModalActive] = useState(false);
  const [authModalActive, setAuthModalActive] = useState(false);

  const onClickHandlerReg = () => {
    setRegModalActive(true)
  }
  const onClickHandlerAuth = (e) => {
    e.stopPropagation()
    setAuthModalActive(true)
  }

  return (
      <div className='login__container'>
        <div className='login__btn' onClick={onClickHandlerAuth}>Login</div>
        <MyButton onClickHandler={onClickHandlerReg}>Sign Up</MyButton>
        <Modal active={authModalActive} setActive={setAuthModalActive} children={<h3 className='modal__header'>Authorization</h3>}/>
        <Modal active={regModalActive} setActive={setRegModalActive} children={<h3 className='modal__header'>Registration</h3>}/>
      </div>
  );
};

export default Login;