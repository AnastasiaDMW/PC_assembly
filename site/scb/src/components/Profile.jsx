import FormProfile from "./Form_Profile.jsx";
import ConfigurationPC from "./Configurations_PC.jsx";
import FavoriteProducts from "./Favorite__Products.jsx";
import load_foto from '.././assets/load_foto.svg'
import '.././modules/scss/Favorite_Products.scss'
import '.././modules/scss/Form_Profile.scss'
import '.././modules/scss/Configurations_PC.scss'
import '.././modules/scss/Profile.scss'

export default function Profile(){
  return <main className="profile">
    <div className="profile__left-side">
      <h2 className="profile__title">Профиль</h2>
      <FormProfile/>
      <ConfigurationPC/>
      <FavoriteProducts/>
    </div>
    <div className="profile__right-side">
      <div className="profile__foto-block">
        <img src={load_foto} alt="" className="profile__foto"/>
      </div>
    </div>
  </main>
}