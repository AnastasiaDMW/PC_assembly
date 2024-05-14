import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo.svg'
import avatar from './../../src/images/svg/avatar.svg'

export default function Header({isBeginPage}){
  return <header className='page-header header'>
    <img src={logo} alt="Логотип SCB" className="header__logo"/>

    {!isBeginPage &&
    <nav className="header__navbar navbar">
      <ul className="navbar__list">
        <li className="navbar__item"><Link to = '/' className="navbar__text">Главная</Link></li>
        <li className="navbar__item"><Link to = '/builds' className="navbar__text">Готовые сборки</Link></li>
        <li className="navbar__item"><Link to = '/' className="navbar__text">Конфигуратор</Link></li>
      </ul>
    </nav>
    }
    <div className="header__profile">
      <Link to = '/profile' className="navbar__profile-link">
        <img src={avatar} alt="Фото профиля" className="header__profile__foto"/>
      </Link>
    </div>
  </header>
}