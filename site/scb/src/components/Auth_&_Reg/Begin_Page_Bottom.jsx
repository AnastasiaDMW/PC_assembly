export default function BeginPageBottom({signText}){
  return <div className="main__bottom">
    <a className="recover-link underline_and_gradient">Забыли пароль?</a>
    <a className="signup-or-signin underline_and_gradient">{signText}</a>
  </div>
}