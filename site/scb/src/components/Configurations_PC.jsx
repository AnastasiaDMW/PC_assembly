import pc_image from './../../public/assets/images/svg/white_square.svg'

export default function ConfigurationPC(){
  return <div className='pc-config'>
    <h3 className='pc-config__title blue-title'>Мои сборки</h3>
    <ul className='pc-config__configs-list configs-list'>
      <li className="configs-list__item">
        <span className="configs-list__id">AOIS 89364043</span>
        <img src={pc_image} alt="" className="configs-list__img"/>
      </li>
      <li className="configs-list__item">
        <span className="configs-list__id">AOIS 89364043</span>
        <img src={pc_image} alt="" className="configs-list__img"/>
      </li>
      <li className="configs-list__item">
        <span className="configs-list__id">AOIS 89364043</span>
        <img src={pc_image} alt="" className="configs-list__img"/>
      </li>
    </ul>
  </div>
}