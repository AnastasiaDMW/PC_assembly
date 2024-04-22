import Authorization from "./components/Auth_&_Reg/Authorization";
import Header from "./components/Header";
import './modules/scss/header.scss';
import './css/App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import FormRegistration from "./components/Auth_&_Reg/FormRegistration";
import FormAuthorization from "./components/Auth_&_Reg/FormAuthorization";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import Home from "./components/Main/Home";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

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

  function showPassword(ref){
    const tagId = ref.current.getAttribute('for')
    const inputPassword = document.getElementById(`${tagId}`);

    if (inputPassword.type === 'password') inputPassword.type = `text`;
    else inputPassword.type = 'password'
  }

  return (
      <div className="App">
        <Header isBeginPage={false}/>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile userAuthorize={userIsAuthorize}/>} />
          <Route path="/auth/" element={<Authorization page={AuthorizationPage} valueReg={isRegister} onChangePages={ChangePages}/>} >
            <Route path="login" element={<FormAuthorization onAuth={auth} onClick={showPassword}/>} />
            <Route path="register" element={<FormRegistration onClick={showPassword} onRegistrationSuccess={handleRegistrationSuccess} />} />
          </Route>
        </Routes>
      </div>
  );
}