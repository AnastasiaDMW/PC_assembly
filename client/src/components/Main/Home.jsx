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

  return <section className='home'>
    <div className="blocks-1"></div>
    <div className="blocks-2"></div>
    <div className="blocks-3"></div>
    <div className="blocks-4"></div>
    <div className="blocks-5"></div>
    <div className="blocks-6"></div>
    <div className="blocks-7"></div>
    <div className="blocks-8"></div>

    <button className='home__button button-1' onClick={() => {
      navigate("/builds")
    }}>Сборки
    </button>
    <button className='home__button button-2' onClick={() => {
    }}>Конфигуратор
    </button>
    <button className='home__button button-3' onClick={() => {
      if (userEmail !== "")
        navigate("/profile");
      else
        navigate("/auth/login");
    }}>Профиль
    </button>
  </section>
}