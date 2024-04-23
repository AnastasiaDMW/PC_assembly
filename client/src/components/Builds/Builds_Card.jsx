import pc_img from '../../assets/builds/pc_img.png'

export default function BuildsCard({title,description}){


  return <li className='builds__card card'>
    <h3 className="card__title">{title}</h3>
    <div className='card__best'>
      <span className='card__best-text'>Почему это лучший выбор?</span>
    </div>
    <div className='card__pc'>
      <img src={pc_img} alt="" className='card__img'/>
    </div>
    <div className='card__description'>
      <ul className="card__list description">
        {description.map((el) => (
          <li className="description__item">
            <span className="description__text">
              {el}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="card__details">
      <a href="" className="card__link">
        Подробнее
      </a>
    </div>
  </li>
}