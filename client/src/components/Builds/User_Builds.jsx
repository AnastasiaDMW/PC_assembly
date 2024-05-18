import '../../modules/scss/user_builds.scss'
import pc_1 from '../../assets/builds/user_builds/pc_1.svg'
import pc_2 from '../../assets/builds/user_builds/pc_2.svg'
import filters_icon from '../../assets/builds/user_builds/open_filters.svg'
import search_icon from '../../assets/builds/user_builds/search_icon.svg'



function TopComponent ({title,imgPath,price,description,active}){
  return <li className="top__item">
    {active && <div className="top__build top__build--active">
      <span className="top__title">{title}</span>
      <img src={imgPath} alt="" className="top__image"/>
      <span className="top__price">{price}</span>
    </div>
        || !active && <div className="top__build">
      <span className="top__title">{title}</span>
      <img src={imgPath} alt="" className="top__image"/>
      <span className="top__price">{price}</span>
    </div>
    }
    <span className="top__description">{description}</span>
  </li>
}


function UserBuildConfigHeader(){
  return <div className="config__header">
    <form className="config__form">
      <img src={search_icon} alt="" className='config__search--icon'/>
      <input type="text" className="config__search"/>
    </form>
    <button className="open-filters">
      Сортировать по
      <img src = {filters_icon} className='open-filters__icon' alt='иконка'/>
    </button>
    <ul className="config__filters filters hidden">
      <li className="filters__values">Возрастанию</li>
      <li className="filters__values">Убыванию</li>
    </ul>
  </div>
}


function UserBuildConfigComponent({title,imgPath,price}){
  return <div className="config__build build">
    <div className="build__card.card">
      <span className="card__title">{title}</span>
      <img src={imgPath} alt="" className="card__image"/>
      <span className="card__price">{price}</span>
    </div>
    <div className="build__components components">
      <ul className="components__list">
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Видеокарта</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Процессор</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Материнская плата</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Охлаждение</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Оперативная память</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">sdd накопитель</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Блок питания</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Жесткий диск</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Корпус</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src="" alt="" className="components__image"/>
          <p className="components__title">Персонализация</p>
          <span className="components__name">Есть</span>
        </li>
      </ul>
    </div>
  </div>
}


export default function UserBuilds() {
  return <div className='user-builds'>
    <h3 className="user-builds__title">Топ сборок пользователей</h3>
    <ul className='user-build__top top'>
      <TopComponent title={'AOIS89364043'} imgPath={pc_2} price={'3723732 Руб.'} description={'Самый'} active={false}/>
      <TopComponent title={'AOIS89364043'} imgPath={pc_1} price={'8238323 Руб.'} description={'Самый самый'} active={true}/>
      <TopComponent title={'AOIS89364043'} imgPath={pc_2} price={'2323323 Руб.'} description={'самый'} active={false}/>
    </ul>
    <div className="user-builds__config config">
      <UserBuildConfigHeader/>
      <UserBuildConfigComponent/>
    </div>
  </div>
}

