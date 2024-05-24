export default function FooterForm (){
  return <form className="footer__form">
    <textarea name="appeal" rows="10" className="footer__appeal"></textarea>
    <div className="right-side">
      <input type="text" className="footer__name" placeholder={'Имя'}/>
      <input type="email" className="footer__email" placeholder={'Email'}/>
      <input type="tel" className="footer__telephone" placeholder={'Телефон'}/>
      <button type="submit" className="footer__button">Отправить</button>
    </div>
  </form>
}