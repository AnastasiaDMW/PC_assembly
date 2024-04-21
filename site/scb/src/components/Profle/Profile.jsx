import FormProfile from "./Form_Profile.jsx";
import ConfigurationPC from "./Configurations_PC.jsx";
import FavoriteProducts from "./Favorite__Products.jsx";
import load_foto_icon from '../../assets/profile/cat.png'
import change_foto_button from '../../assets/profile/change_foto_button.svg'
import button from '../../assets/profile/profile_button/profile_button.svg'
import '../../modules/scss/fevorite_products.scss'
import '../../modules/scss/form_profile.scss'
import '../../modules/scss/сonfigurations_pc.scss'
import '../../modules/scss/profile.scss'

export default function Profile(){
  return <main className="profile">
    <div className="profile__left-side">
      <div className="profile__bg-decor--1"></div>
      <div className="profile__bg-decor--2"></div>
      <h2 className="profile__title">Профиль</h2>
      <FormProfile/>
      <ConfigurationPC/>
      <FavoriteProducts/>
    </div>
    <div className="profile__right-side">
      <div className='profile__change-foto'>
      <button className='profile__change-foto-button'>
          <img src={change_foto_button} alt=''/>
        </button>
      </div>
      <div className="profile__foto-block">
        <img src={load_foto_icon} alt="" className="profile__foto"/>
      </div>
      <div className='profile__save'>
        <div className="profile__save__">
          <button className='profile__save-button'>Сохранить<br/>изменения</button>
        </div>
      </div>
    </div>
  </main>
}