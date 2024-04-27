import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function FormAuthorization({onChangeEmail, onAuth, onClick}){
  let inputRef = useRef(null);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevUser => ({
        ...prevUser,
        [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData.password === "" || loginData.email === "") {
        setErrorMessage("Все поля должны быть заполнены");
        return;
    } else {
        setErrorMessage('');
    }

    let info = ""
    try {
        const response = await axios.post("http://localhost:9090/api/user/login", {
            email: loginData.email,
            password: loginData.password,
        });
        info = response.data;
        if (info === "Вход выполнен успешно!") {
          toast.success(info, {
            position: "top-center",
          });
          handleLogin(loginData.email)
          console.log(loginData.email);
          onAuth(true);
          setLoginData({
            email: '',
            password: '',
          });
          navigate("/profile");
        } else {
          toast.error(info, {
            position: "top-center",
          });
          onAuth(false);
        }
        
    } catch (err) {
        console.error("Ошибка при регистрации пользователя: ",err);
        toast.error(err, {
          position: "top-center",
        });
        onAuth(false);
    }
  }

  const handleLogin = (email) => {
    localStorage.setItem('userEmail', email);
  };

  return <form action="#" method="post" className="main__form form" onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={handleChange} placeholder="Email" className="form__login form__userdata"/>
      <input id="before" name="password" onChange={handleChange} type="password" placeholder="Пароль" className="form__password form__userdata"/>
      <label htmlFor="before" className='input-lable' ref = {inputRef} onClick={() => onClick(inputRef)}></label><br/>
      {/* Отображаем сообщение об ошибке */}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    <button type="submit" className="form__button">Войти</button>
  </form>
}