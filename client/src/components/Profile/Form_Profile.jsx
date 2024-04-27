// eslint-disable-next-line

import { useState, useEffect } from "react"

export default function FormProfile(){

  const [isChange, setIsChange] = useState(false);
  const [user, setUser] = useState({
    // Пока id=1, потом поменяю
    id: 1,
    login: "",
    lastname: "",
    email: ""
  })

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

  // const [changedData, setChangedData] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(storedUser);
      console.log("Полученный пользователь", userData);
    }
    
    // isChangeData()
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      setUserData(storedUser);
    }
    setUser({
      login: userData.name,
      lastname: userData.lastname,
      email: userData.email
    })
  }, []);

  function getUserValues() {
    console.log(user);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
        ...prevUser,
        [name]: value
    }));
  }

  // function isChangeData() {
  //   if (user.login !== "" && user.email !== "") {
  //     setIsChange(true);
  //   }
  //   else {
  //     setIsChange(false);
  //   }
  // }

  return <ul className="profile__input-list">
    <li className="profile__input-list__item">
      <input type="text" name="login" value={user.login} onChange={handleChange} className="profile__input-list__input name-input" placeholder='Логин'/>
    </li>
    <li className="input-list__item">
      <input type="text" name="lastname" value={user.lastname} onChange={handleChange} className="profile__input-list__input surname-input" placeholder='Полное имя'/>
    </li>
    <li className="input-list__item">
      <input type="email" name="email" value={user.email} onChange={handleChange} className="profile__input-list__input email-input" placeholder='Email'/>
    </li>
    { isChange === true && (
      <button onClick={getUserValues} className="form__button">Сохранить изменения</button>
    )}
  </ul>
}