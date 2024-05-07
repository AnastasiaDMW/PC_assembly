
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../../modules/scss/home.scss'

export default function Home({}) {

  let navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        setUserEmail(storedEmail);
      }
    }, []);

  return (
    <>
      <button onClick={() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
          setUserEmail(storedEmail);
        }
        if (userEmail !== "")
          navigate("/profile");
        else
          navigate("/auth/login");
      }}>Профиль</button><br/><br/>

      <button onClick={() => {}}>Конфигуратор</button><br/><br/>

      <button onClick={() => {
        navigate("/builds")
      }}>Сборки</button><br/><br/>
    </>
  );
}