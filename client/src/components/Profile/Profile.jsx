import * as React from 'react';
import {useEffect,useState} from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import ImageLoader from '../Profile/ImageLoader';

import '../../modules/scss/favorite_products.scss'
import '../../modules/scss/form_profile.scss'
import '../../modules/scss/сonfigurations_pc.scss'
import '../../modules/scss/profile.scss'

import ConfigurationPC from './Configurations_PC';
import FavoriteProducts from './Favorite__Products';

import change_foto_button from "../../assets/profile/change_foto_button.svg";

export default function Profile({userAuthorize}) {

    
    const baseUrl = "http://localhost:9090/api/user/fileSystem/"
    const [isChange, setIsChange] = useState(false);
    const [isChangeImage, setIsChangeImage] = useState(false);
    const [user, setUser] = useState({
      login: "",
      lastname: "",
      email: ""
    })
    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState({
      id: 0,
      name: "",
      lastname: "",
      email: "",
      photo: "CatDefaultAvatar.png",
      bonuses: 0,
      phoneNumber: "",
      assemblies: []
    })

    const [userEmail, setUserEmail] = useState(() => {
      const storedEmail = localStorage.getItem('userEmail');
      return storedEmail ? storedEmail : "";
    });
    
    useEffect(() => {
      window.addEventListener('beforeunload', () => {
        localStorage.setItem('userEmail', userEmail);
      });
      getUser();
      return () => {
        window.removeEventListener('beforeunload', () => {
          localStorage.setItem('userEmail', userEmail);
        });
      };
    }, [userEmail]);

    useEffect(() => {
      window.addEventListener('beforeunload', () => {
        localStorage.setItem('userData', userData);
      });
    
      return () => {
        window.removeEventListener('beforeunload', () => {
          localStorage.setItem('userData', userData);
        });
      };
    }, [userData]);

    const getUser = async (e) => {
      try {
        const response = await axios.get("http://localhost:9090/api/user/user_email", {
          params: {
            email: userEmail,
          }
        });
        const user = response.data;
        setUserData(user);
        localStorage.setItem('userData', userData);
      } catch (err) {
        console.error("Ошибка при получении данных", err);
      }
    }

    const handleUserData = (user) => {
      localStorage.setItem('userData', user);
    };

    useEffect(() => {
      handleUserData(userData);
      if (user) {
        setUser({
        login: userData.name,
        lastname: userData.lastname,
        email: userData.email
      })
      }
      
    }, [userData]);

    const handleClick = async () => {
      let info;

      if (userData.name !== user.login || userData.lastname !== user.lastname) {
        try {
          const response = await fetch('http://localhost:9090/api/user/update/'+userData.id, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              lastname: user.lastname,
              name: user.login
            })
          });
          setUserData(prevUser => ({
            ...prevUser,
            lastname: user.lastname,
            name: user.login
          }));
          console.log("Данные пользователя изменены");
          info = "Данные пользователя изменены"
          toast.success(info, {
            position: "top-center",
          });
        } catch (error) {
          console.error("ошибка");
        }
      }

      if (!image) {
        return;
      }
    
      const formData = new FormData();
      formData.append('image', image);
    
      try {
        const responseImage = await axios.post('http://localhost:9090/api/user/fileSystem', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const responseChangeAvatar = await axios.post('http://localhost:9090/api/user/change_avatar', {
          id: userData.id,
          avatar: image.name,
        });

        setUserData(prevUser => ({
          ...prevUser,
          photo: image.name
        }));
        setImage(null);
        info = "Аватарка пользователя изменена"
        toast.success(info, {
          position: "top-center",
        });

      } catch (error) {
        info = "Ошибка при загрузке файла"
        toast.error(info, {
          position: "top-center",
        });
        console.error('Ошибка при загрузке файла:', error);
      }
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
    
      setUser(prevUser => {
        const updatedUser = {
          ...prevUser,
          [name]: value
        };
    
        const isEqual =
          updatedUser.email === userData.email &&
          updatedUser.lastname === userData.lastname &&
          updatedUser.login === userData.name;
    
        setIsChange(!isEqual);
    
        return updatedUser;
      });
    }

    return (
        <main className="profile">
          <div className="profile__left-side">
            <div className="profile__bg-decor--1"></div>
            <div className="profile__bg-decor--2"></div>
            <h2 className="profile__title">Профиль</h2>
            <ul className="profile__input-list">
            <li className="profile__input-list__item">
              <input type="text" name="login" value={user.login} onChange={handleChange} className="profile__input-list__input name-input" placeholder='Логин'/>
            </li>
            <li className="input-list__item">
              <input type="text" name="lastname" value={user.lastname} onChange={handleChange} className="profile__input-list__input surname-input" placeholder='Полное имя'/>
            </li>
            <li className="input-list__item">
              <input type="email" name="email" value={user.email} onChange={handleChange} className="profile__input-list__input email-input" placeholder='Email' readOnly/>
            </li>
          </ul>
            <ConfigurationPC/>
            <FavoriteProducts/>
          </div>
          <div className="profile__right-side">
            <div className='profile__change-foto'>
              <form action="" className="profile__change-foto-form">
                <label  className='profile__change-foto-button'>
                  <input onChange={(event) => {
                    setImage(event.target.files[0])
                    setIsChangeImage(true);
                  }}
                    type='file' className='profile__change-foto-input'/>
                  <img src={change_foto_button} alt='' className='profile__change-foto-icon'/>
                </label>
              </form>
            </div>
            <div className="profile__foto-block">
              { image && <ImageLoader imageUrl={window.URL.createObjectURL(image)} className="profile__foto"/>}
              { !image && <ImageLoader imageUrl={baseUrl+userData.photo} className="profile__foto"/>}
            </div>
            <div className='profile__save'>
              <div className="profile__save__">
                { (isChange || isChangeImage) && (
                  <button className="profile__save-button" onClick={handleClick}>
                    Сохранить<br />изменения
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
    );
}