import {useRef} from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

export default function FormRegistration ({onClick, onRegistrationSuccess}){

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const [user, setUser] = useState({
        login: "",
        password: "",
        confirmPassword: "",
        email: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            setErrorMessage('Пароли не совпадают');
            return;
        } else {
            setErrorMessage('');
        }
        onRegistrationSuccess();

        toast.success("Пользователь зарегистрирован", {
            position: "top-center",
        });

        try {
            const response = await axios.post("http://localhost:9090/api/user/register", {
                email: user.email,
                lastname: "",
                name: user.login,
                password: user.password,
                phoneNumber: "",
                userRole: 1
            });
            console.log("Пользователь успешно зарегистрирован: ", response.data);

        } catch (err) {
            console.error("Ошибка при регистрации пользователя: ",err);
        }

        setUser({
            login: '',
            password: '',
            confirmPassword: '',
            email: ''
        });
        navigate(-1);
    }

    let inputRef = useRef(null);
    let inputRef2 = useRef(null);

    return <form action="#" method="post" className="main__form form" onSubmit={handleSubmit}>
        <ul className="form__input-list auth-input-list">
        <li className="auth-input-list__item">
            <input type='email' name="email" value={user.email} onChange={handleChange} required placeholder='Email' className='form__userdata'/>
        </li>
        <li className="auth-input-list__item">
            <input type="text" name="login" placeholder="Логин" value={user.login} onChange={handleChange} className="form__login form__userdata"/>
        </li>
        </ul>
        <input id="before" name="password" type="password" value={user.password} onChange={handleChange} placeholder="Пароль" className="form__password form__userdata"/>
        <label htmlFor="before" className='input-label ' ref={inputRef} onClick={() => onClick(inputRef)}/>

        <input id="onemore-before" name="confirmPassword" type="password" value={user.confirmPassword} onChange={handleChange} placeholder="Повторите пароль"
                className="form__password form__userdata"/>
        <label htmlFor="onemore-before" className='input-label' ref={inputRef2} onClick={() => onClick(inputRef2)}/><br/>
        {/* Отображаем сообщение об ошибке, если пароли не совпадают */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type='submit' className="form__button">Зарегистроваться</button>
    </form>
}