import pc_image from '../../../src/images/svg/white_square.svg'

export default function FavoriteProducts(){
  return <div className="fav-products">
    <h3 className="fav-products__title blue-title">Избранные товары</h3>
    <ul className='fav-products__products-list products-list'>
      <li className="products-list__item">
        {/*<span className="products-list__id">1</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">2</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">3</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">4</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">5</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">6</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">7</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">8</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
      <li className="products-list__item">
        {/*<span className="products-list__id">9</span>*/}
        <img src={pc_image} alt="" className="products-list__img"/>
      </li>
    </ul>
  </div>
}