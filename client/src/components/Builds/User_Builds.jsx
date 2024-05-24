import '../../modules/scss/user_builds.scss'
import pc_1 from '../../assets/builds/user_builds/pc_1.svg'
import pc_2 from '../../assets/builds/user_builds/pc_2.svg'
import pc_3 from '../../assets/builds/user_builds/pc_3.svg'

import filters_icon from '../../assets/builds/user_builds/open_filters.svg'
import search_icon from '../../assets/builds/user_builds/search_icon.svg'
import heart_icon from '../../assets/builds/user_builds/heart.svg'

import gpu from '../../assets/builds/user_builds/components_ICON/graphics_card.svg'
import cpu from '../../assets/builds/user_builds/components_ICON/cpu.svg'
import motherboard from '../../assets/builds/user_builds/components_ICON/mother_board.svg'
import cooling from '../../assets/builds/user_builds/components_ICON/cooling.svg'
import ram from '../../assets/builds/user_builds/components_ICON/ram.svg'
import ssd from '../../assets/builds/user_builds/components_ICON/ssd.svg'
import power_unit from '../../assets/builds/user_builds/components_ICON/power_unit.svg'
import hdd from '../../assets/builds/user_builds/components_ICON/hdd.svg'
import pc_case from '../../assets/builds/user_builds/components_ICON/case.svg'
import personalization from '../../assets/builds/user_builds/components_ICON/personalization.svg'
import {useState} from "react";





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
  const [openFilters,setOpenFilters] = useState(false);
  const [filterValue,setFilterValue] = useState(1);

  const openMenu = () => {
    if (openFilters){
      setOpenFilters(false);
    } else {
      setOpenFilters(true);
    }
  };

  const chooseValue = () => {
    if(filterValue === 1){
      setFilterValue(2);
    } else if (filterValue === 2) {
      setFilterValue(1);
    }
  };

  return <div className="config__header">
    <form className="config__form">
      <img src={search_icon} alt="" className='config__search--icon'/>
      <input type="text" className="config__search"/>
    </form>
    <div className="config__sort">
      <button className="open-filters">
        Сортировать по
        <img src = {filters_icon}
             className={ openFilters ? 'open-filters__icon active' : 'open-filters__icon'}
             onClick={openMenu}
             alt ='иконка'/>
      </button>
      <ul className={ openFilters ? 'config__filters filters active' :
          'config__filters filters'}>
        <li className={ filterValue === 1 ? 'filters__values active':'filters__values'}
            onClick={chooseValue}>
          Возрастанию
        </li>
        <li className={ filterValue === 2 ? 'filters__values active':'filters__values'}
            onClick={chooseValue}>
          Убыванию
        </li>
      </ul>
    </div>
  </div>
}


function UserBuildConfigComponent({title,imgPath,price}){

  const [active,setActive] = useState(false);

  const initialActive = () => {
    if (active){
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return <div className="config__build build">
    <div className="build__card">
      <span className="build__title">{title}</span>
      <img src={imgPath} alt="" className="build__image"/>
      <span className="build__price">{price}</span>
      <button className={
        active ? 'build__like build__like--active' : 'build__like'
      } onClick={initialActive}>
      </button>
    </div>
    <div className="build__components components">
      <ul className="components__list">
        <li className="components__item">
          <img src={gpu} alt="" className="components__image"/>
          <p className="components__title">Видеокарта</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={cpu} alt="" className="components__image"/>
          <p className="components__title">Процессор</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={motherboard} alt="" className="components__image"/>
          <p className="components__title">Материнская плата</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={cooling} alt="" className="components__image"/>
          <p className="components__title">Охлаждение</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={ram} alt="" className="components__image"/>
          <p className="components__title">Оперативная память</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={ssd} alt="" className="components__image"/>
          <p className="components__title">sdd накопитель</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={power_unit} alt="" className="components__image"/>
          <p className="components__title">Блок питания</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={hdd} alt="" className="components__image"/>
          <p className="components__title">Жесткий диск</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={pc_case} alt="" className="components__image"/>
          <p className="components__title">Корпус</p>
          <span className="components__name">Palit GeForce RTX 4060 Dual [8GB, 3072 CUDA]</span>
        </li>
        <li className="components__item">
          <img src={personalization} alt="" className="components__image"/>
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
      <TopComponent title={'AOIS89364043'} imgPath={pc_3} price={'2323323 Руб.'} description={'самый'} active={false}/>
    </ul>
    <div className="user-builds__config config">
      <UserBuildConfigHeader/>
      <div className="build__list">
        <UserBuildConfigComponent title={'AOIS89364043'} imgPath={pc_2} price={'3723732 Руб.'}/>
        <UserBuildConfigComponent title={'AOIS89364043'} imgPath={pc_2} price={'3723732 Руб.'}/>
        <UserBuildConfigComponent title={'AOIS89364043'} imgPath={pc_2} price={'3723732 Руб.'}/>
      </div>
    </div>
  </div>
}

