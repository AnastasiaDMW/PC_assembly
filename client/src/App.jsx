import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Authorization from "./components/Auth_&_Reg/Authorization";
import FormRegistration from "./components/Auth_&_Reg/FormRegistration";
import FormAuthorization from "./components/Auth_&_Reg/FormAuthorization";
import Profile from "./components/Profile/Profile";
import Home from "./components/Main/Home";
import Builds from "./components/Builds/Builds";

import "react-toastify/dist/ReactToastify.css";
import './modules/scss/header.scss';
import './css/App.css';


export default function App() {

  const AuthorizationPage = {
    titleSignInText: 'Авторизация',
    titleSignUpText: 'Регистрация',
    signInText: 'Зарегистрироваться',
    signUpText: 'Войти',
    isRegisterPage: false
  }

  const [isRegister, setIsRegister] = useState(AuthorizationPage.isRegisterPage);
  const [userIsAuthorize, setUserIsAuthorize] = useState(false);

  function auth(value) {
      setUserIsAuthorize(value);
  }

  const navigate = useNavigate();

  function ChangePages() {
    setIsRegister(!isRegister);
    if (!isRegister) {
        navigate('/auth/register');
    } else {
        navigate('/auth/login');
    }
  }

  function handleRegistrationSuccess() {
      setIsRegister(false);
  }
  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem('userEmail', "");

    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  function showPassword(ref){
    const tagId = ref.current.getAttribute('for')
    const inputPassword = document.getElementById(`${tagId}`);

    if (inputPassword.type === 'password') inputPassword.type = `text`;
    else inputPassword.type = 'password'
  }

  return (
      <div className="App">
        {/*<Header isBeginPage={true}/>*/}
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile userAuthorize={userIsAuthorize}/>} />
          <Route path="/auth/" element={<Authorization page={AuthorizationPage} valueReg={isRegister} onChangePages={ChangePages}/>} >
            <Route path="login" element={<FormAuthorization onAuth={auth} onClick={showPassword}/>} />
            <Route path="register" element={<FormRegistration onClick={showPassword} onRegistrationSuccess={handleRegistrationSuccess} />} />
          </Route>
          <Route path="/builds" element={<Builds />} />
        </Routes>
      </div>
  );
}