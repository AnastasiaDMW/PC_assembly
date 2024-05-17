import pc_image from '../../../src/images/svg/white_square.svg'
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function FavoriteProducts(){

  const baseUrl = "http://localhost:9090/api/component/fileSystem/"
  const [userEmail, setUserEmail] = useState(() => {
    const storedEmail = localStorage.getItem('userEmail');
    return storedEmail ? storedEmail : "";
  });
  const [userFavorites, setUserFavorites] = useState([]);
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

  useEffect(() => {
    console.log(userEmail);
    if (userData.id === 0) {
      getUser()
    }
  }, [userEmail]);

  useEffect(() => {
    console.log(userData);
    fetchData()
  }, [userData]);

  useEffect(() => {
    console.log(userFavorites);
  }, [userFavorites]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/user/user_favorite', {
        params: {
          userId: userData.id
        }
      });
      const data = response.data;
      setUserFavorites(data.carts);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

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

  return <div className="fav-products">
    <h3 className="fav-products__title blue-title">Избранные товары</h3>
    <div className='fav-products__products-list products-list'>
      { userFavorites && userFavorites.map((item, index) => {
        return (
          <div className="products-list__item" key={index}>
            <span className="configs-list__id">{item.assemblies.title}</span>
            <img
              src={`${baseUrl}${item.assemblies.images}`}
              alt={`Изображение сборки ${item.assemblies.id}`}
              className="configs-list__img"
            />
          </div>
        );
      })}
    </div>
  </div>
}