import React, { useState, useEffect } from 'react';
import axios from "axios";


export default function ConfigurationPC() {

  const baseUrl = "http://localhost:9090/api/component/fileSystem/"
  const [userEmail, setUserEmail] = useState(() => {
    const storedEmail = localStorage.getItem('userEmail');
    return storedEmail ? storedEmail : "";
  });
  const [userAssemblies, setUserAssemblies] = useState([]);
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

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/user/user_assembly', {
        params: {
          userAssemblyId: userData.id
        }
      });
      const data = response.data;
      setUserAssemblies(data.assemblies);
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

  return <div className='pc-config'>
    <h3 className='pc-config__title blue-title'>Мои сборки</h3>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }} className='pc-config__configs-list configs-list' >
      { userAssemblies && userAssemblies.map((assembly) => (
        <li className="configs-list__item" key={assembly?.id}>
          <span className="configs-list__id">{assembly?.title}</span>
          <img
            src={`${baseUrl}${assembly?.images}`}
            alt={`Изображение сборки ${assembly?.id}`}
            className="configs-list__img"
          />
      </li>
      ))}
      </ul>
  </div>
}