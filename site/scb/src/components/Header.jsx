import logo from '../../public/assets/images/svg/logo.svg'
import avatar from './../../public/assets/images/svg/avatar.svg'

export default function Header({isBeginPage}){
  return <header className='page-header header'>
    <img src={logo} alt="Логотип SCB" className="header__logo"/>
    {!isBeginPage &&
    <nav className="header__navbar navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><span className="navbar__text">Конфигуратор</span></li>
        <li className="navbar__item"><span className="navbar__text">Готовые сборки</span></li>
        <li className="navbar__item"><span className="navbar__text">Корзина</span></li>
      </ul>
    </nav>
    }
    <div className="header__profile">
      <img src={avatar} alt="Фото профиля" className="header__profile__foto"/>
    </div>
  </header>
}