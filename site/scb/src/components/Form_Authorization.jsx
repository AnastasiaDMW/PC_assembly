import {useRef} from "react";

export default function FormAuthorization({onClick}){
  let inputRef = useRef(null);

  return <form action="#" method="post" className="main__form form">
      <input type="text" placeholder="Логин" className="form__login form__userdata"/>
      <input id="before" type="password" placeholder="Пароль" className="form__password form__userdata"/>
      <label htmlFor="before" className='input-lable' ref = {inputRef} onClick={() => onClick(inputRef)}></label>
    <button type='submit' className="form__button">Войти</button>
  </form>
}