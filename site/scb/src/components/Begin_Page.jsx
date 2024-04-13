import BeginPageBottom from "./Begin_Page_Bottom.jsx";
import FormRegistration from "./Form_Registration.jsx";
import FormAuthorization from "./Form_Authorization.jsx";
import '.././modules/scss/authorization.scss'

export default function BeginPage({page}) {

  function showPassword(ref){
    const tagId = ref.current.getAttribute('for')
    const inputPassword = document.getElementById(`${tagId}`);

    if (inputPassword.type === 'password') inputPassword.type = `text`;
    else inputPassword.type = 'password'
  }

  return <main className='page-main'>
    <section className="main">
      <h1 className="main__title">{page.titleText}</h1>

      {page.isRegisterPage && <FormRegistration onClick={showPassword} />}
      {!page.isRegisterPage && <FormAuthorization onClick={showPassword}/>}

      <BeginPageBottom signText={page.signText}/>
    </section>
  </main>
}