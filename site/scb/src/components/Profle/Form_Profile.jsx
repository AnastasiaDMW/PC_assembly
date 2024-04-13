export default function FormProfile(){
  return <ul className="profile__input-list">
    <li className="profile__input-list__item">
      <input type="text" className="profile__input-list__input name-input" placeholder='Имя'/>
    </li>
    <li className="input-list__item">
      <input type="text" className="profile__input-list__input surname-input" placeholder='Фамилия'/>
    </li>
    <li className="input-list__item">
      <input type="tel" className="profile__input-list__input phone-input" placeholder='Телефон'/>
    </li>
    <li className="input-list__item">
      <input type="email" className="profile__input-list__input email-input" placeholder='Email'/>
    </li>
  </ul>
}