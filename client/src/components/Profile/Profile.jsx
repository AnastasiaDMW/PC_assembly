import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import ImageLoader from './ImageLoader';

import '../../modules/scss/favorite_products.scss'
import '../../modules/scss/form_profile.scss'
import '../../modules/scss/сonfigurations_pc.scss'
import '../../modules/scss/profile.scss'

import FormProfile from './Form_Profile';
import ConfigurationPC from './Configurations_PC';
import FavoriteProducts from './Favorite__Products';

import change_foto_button from "../../assets/profile/change_foto_button.svg";

export default function Profile({userAuthorize}) {

    const [userEmail, setUserEmail] = useState('');
    const [userPhoto, setUserPhoto] = useState("");
    const [image, setImage] = useState(null);
    const [userAvatarUrl, setUserAvatarUrl] = useState("http://localhost:9090/api/user/fileSystem/CatDefaultAvatar.png");
    const [userData, setUserData] = useState({
      id: 0,
      name: "",
      lastname: "",
      email: "",
      photo: "",
      bonuses: 0,
      phoneNumber: "",
      assemblies: []
    })

    useEffect(() => {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        setUserEmail(storedEmail);
      }
    }, []);
    
    useEffect(() => {
      if (userEmail && userData.email === "") {
        getUser();
        setImage(userData.photo)
      }
      if (userAvatarUrl === "") {
        getUserAvatar();
      }
      console.log(userData);
    }, [userEmail]);

    useEffect(() => {
      getUser();
      console.log(userData);
    }, [image]);

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

    function getUserAvatar() {
        let baseUrl = "http://localhost:9090/api/user/fileSystem/"
        setUserAvatarUrl(baseUrl+userData.photo);
    }

    const handleUserData = (user) => {
      localStorage.setItem('userData', user);
    };

    useEffect(() => {
      setUserPhoto(userData.photo);
      handleUserData(userData);
    }, [userData]);

    const handleImageUpload = async () => {
      let info;

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
        console.log('Файл успешно загружен:', responseImage.data);
        console.log('Название файла изменено', responseChangeAvatar.data);
        console.log(image.name);
        info = "Аватарка пользователя изменена"
        toast.success(info, {
          position: "top-center",
        });
        getUserAvatar();
      } catch (error) {
        info = "Ошибка при загрузке файла"
        toast.error(info, {
          position: "top-center",
        });
        console.error('Ошибка при загрузке файла:', error);
      }
    };

    return (
        <main className="profile">
          <div className="profile__left-side">
            <div className="profile__bg-decor--1"></div>
            <div className="profile__bg-decor--2"></div>
            <h2 className="profile__title">Профиль</h2>
            <FormProfile />
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
              <ImageLoader imageUrl={userAvatarUrl} alt="" className="profile__foto"/>
            </div>
            <div className='profile__save'>
              <div className="profile__save__">
                <button className='profile__save-button' onClick={handleImageUpload}>Сохранить<br/>изменения</button>
              </div>
            </div>
          </div>
        </main>
    );
}