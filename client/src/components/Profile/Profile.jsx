// eslint-disable-next-line

import * as React from 'react';
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../../modules/scss/favorite_products.scss'
import '../../modules/scss/form_profile.scss'
import '../../modules/scss/сonfigurations_pc.scss'
import '../../modules/scss/profile.scss'

import FormProfile from './Form_Profile';
import ConfigurationPC from './Configurations_PC';
import FavoriteProducts from './Favorite__Products';

import change_foto_button from "../../assets/profile/change_foto_button.svg";
import load_foto_icon from "../../assets/profile/load_foto_icon.svg";

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
    const [image, setImage] = useState(null);

    return (
        <main className="profile">
          <div className="profile__left-side">
            <div className="profile__bg-decor--1"></div>
            <div className="profile__bg-decor--2"></div>
            <h2 className="profile__title">Профиль</h2>
            <FormProfile onUpdateUser={updateUser} userId={userId}/>
            <ConfigurationPC/>
            <FavoriteProducts/>
          </div>
          <div className="profile__right-side">
            <div className='profile__change-foto'>
              <form action="" className="profile__change-foto-form">
                <label  className='profile__change-foto-button'>
                  <input onChange={(event) => {
                    setImage(event.target.files[0])
                  }}
                    type='file' className='profile__change-foto-input'/>
                  <img src={change_foto_button} alt='' className='profile__change-foto-icon'/>
                </label>
              </form>
            </div>
            <div className="profile__foto-block">
              {image && <img src={URL.createObjectURL(image)} alt="" className="profile__foto"/>}
              {!image && <img src={load_foto_icon} alt="" className="profile__foto"/>}
            </div>
            <div className='profile__save'>
            <div className="profile__save__">
                <button type = 'submit' className='profile__save-button'>Сохранить<br/>изменения</button>
              </div>
            </div>
          </div>
        </main>
    );
}