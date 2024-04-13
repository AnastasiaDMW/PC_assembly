export default function BeginPageBottom({signText}){
  return <div className="main__bottom">
    <span className="main__recover underline_and_gradient">Забыли пароль?</span>
    <span className="signup-or-signin underline_and_gradient">{signText}</span>
  </div>
}