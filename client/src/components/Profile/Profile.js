import * as React from 'react';
import load_foto from '../../assets/load_foto.svg'
import '../../modules/scss/Favorite_Products.scss'
import '../../modules/scss/Form_Profile.scss'
import '../../modules/scss/Configurations_PC.scss'
import '../../modules/scss/Profile.scss'
import FormProfile from './Form_Profile';
import ConfigurationPC from './Configurations_PC';
import FavoriteProducts from './Favorite__Products';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile({userAuthorize}) {

    const [userId, setUserId] = useState(0);
    const [user, setUser] = useState({
        id: userId,
        login: "",
        photo: "",
        email: "",
        isRegisterPage: false
    });

    const navigate = useNavigate();

    useEffect(() => {
      const handleBack = (event) => {
          if (event.state && event.state.prevPath === '/auth/login') {
              // Действия при нажатии кнопки "назад" после перехода с /auth/login
              // Например, перенаправление на другую страницу
              console.log("зашел");
              navigate('/');
          } else {
            console.log("зашел в else");
              // Действия при нажатии кнопки "назад" в других случаях
              // Например, обновление данных
              // Обработка нажатия кнопки "назад" в вашем приложении
          }
      };

      window.addEventListener('popstate', handleBack);

      return () => {
          window.removeEventListener('popstate', handleBack);
      };
    }, [navigate]);

    function updateUserId(userId) {
        setUserId(userId);
    }

    function updateUser(user) {
        setUser(user);
    }

    function handleClick() {
        navigate('/auth/login');
    }

    return (
      <main className="profile">
        <div className="profile__left-side">
          <h2 className="profile__title">Профиль</h2>
          <FormProfile onUpdateUser={updateUser} userId={userId}/>
          <ConfigurationPC/>
          <FavoriteProducts/>
        </div>
        <div className="profile__right-side">
          <div className="profile__foto-block">
            <img src={load_foto} alt="" className="profile__foto"/>
          </div>
        </div>
      </main>
    );
}