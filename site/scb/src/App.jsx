import BeginPage from './components/Begin_Page.jsx';
import Header from './components/Header';
import './App.css';
import './modules/scss/header.scss'
// import Profile from "./components/Profile.jsx";

// const RegisterPage = {
//   titleText: 'Регистрация',
//   signText: 'Войти',
//   isRegisterPage: true
// }
const AuthorizationPage = {
  titleText: 'Авторизация',
  signText: 'Зарегистрироваться',
  isRegisterPage: false
}

export default function App(){
  return <>
    <Header isBeginPage={false}/>
    <BeginPage page={AuthorizationPage}/>
    {/*<Profile/>*/}
  </>
}

