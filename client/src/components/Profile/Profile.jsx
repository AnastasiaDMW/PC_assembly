import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

import '../../modules/scss/favorite_products.scss'
import '../../modules/scss/form_profile.scss'
import '../../modules/scss/сonfigurations_pc.scss'
import '../../modules/scss/profile.scss'

import FormProfile from './Form_Profile';
import ConfigurationPC from './Configurations_PC';
import FavoriteProducts from './Favorite__Products';

import change_foto_button from "../../assets/profile/change_foto_button.svg";
import load_foto_icon from "../../assets/profile/cat.png";

export default function Profile({userAuthorize}) {

    const [userEmail, setUserEmail] = useState('');
    const [userPhoto, setUserPhoto] = useState("");
    // const [image, setImage] = useState(null);
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

    const getUser = async (e) => {
      try {
        const response = await axios.get("http://localhost:9090/api/user/user_email", {
          params: {
            email: userEmail,
          }
        });
        const user = response.data;
        setUserData(user);
        console.log(user)
      } catch (err) {
        console.error("Ошибка при получении данных", err);
      }
    }

    useEffect(() => {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        setUserEmail(storedEmail);
      }
    }, []);
    
    useEffect(() => {
      if (userEmail && userData.email === "") {
        getUser();
      }
    }, [userEmail]);

    const handleUserData = (user) => {
      localStorage.setItem('userData', user);
    };

    useEffect(() => {
      setUserPhoto(userData.photo);
      handleUserData(userData);
    }, [userData]);

    function checkUserData() {
      console.log(userEmail);
      console.log(userData);
      console.log(userPhoto);
    }

    const [image, setImage] = useState(null);

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
              {image && <img src={URL.createObjectURL(image)} alt="" className="profile__foto"/>}
              {!image && <img src={load_foto_icon} alt="" className="profile__foto"/>}
            </div>
            <div className='profile__save'>
              <div className="profile__save__">
                <button className='profile__save-button' onClick={checkUserData}>Сохранить<br/>изменения</button>
              </div>
            </div>
          </div>
        </main>
    );
}