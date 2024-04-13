import {useRef} from "react";

export default function FormRegistration ({onClick}){
   let inputRef = useRef(null);
   let inputRef2 = useRef(null);

   return <form action="#" method="post" className="main__form form">
     <ul className="form__input-list auth-input-list">
       <li className="auth-input-list__item">
         <input type='email' placeholder='Email' className='form__userdata'/>
       </li>
       <li className="auth-input-list__item">
         <input type="text" placeholder="Логин" className="form__login form__userdata"/>
       </li>
     </ul>
     <input id="before" type="password" placeholder="Пароль" className="form__password form__userdata"/>
       <label htmlFor="before" className='input-label ' ref={inputRef} onClick={() => onClick(inputRef)}/>

       <input id="onemore-before" type="password" placeholder="Повторите пароль"
              className="form__password form__userdata"/>
       <label htmlFor="onemore-before" className='input-label' ref={inputRef2} onClick={() => onClick(inputRef2)}/>
     <button type='submit' className="form__button">Зарегистроваться</button>
   </form>
}