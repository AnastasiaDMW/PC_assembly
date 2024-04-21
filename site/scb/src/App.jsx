import BeginPage from './components/Auth_&_Reg/Begin_Page.jsx';
import Header from './components/Header';
import './modules/css/reset.css'
import './App.css';
import Profile from "./components/Profle/Profile.jsx";
import Builds from "./components/Builds/Builds.jsx";
import './modules/scss/header.scss'
import './modules/scss/builds.scss'
import Home from "./components/Home.jsx";

const RegisterPage = {
  titleText: 'Регистрация',
  signText: 'Войти',
  isRegisterPage: true
}
const AuthorizationPage = {
  titleText: 'Авторизация',
  signText: 'Зарегистрироваться',
  isRegisterPage: false
}

export default function App(){
  return <>
    <Header isBeginPage={false}/>
    {/*<BeginPage page={RegisterPage}/>*/}
    <Profile/>
    {/*<Builds/>*/}
    {/*<Home/>*/}
  </>
}

