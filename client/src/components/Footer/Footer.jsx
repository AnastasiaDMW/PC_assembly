import FooterForm from "./Footer_Form";
import '../../modules/scss/footer.scss'


export default function Footer(){
  return <footer className='footer'>
    <h3 className="footer__title">Связь с нашими специалистами</h3>
    <FooterForm/>
  </footer>
}