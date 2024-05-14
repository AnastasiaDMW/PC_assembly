import React from 'react';
import BeginPageBottom from './BeginPageBottom';
import { Outlet } from 'react-router-dom';

import '../../modules/scss/authorization.scss';
import Header from "../Header";


export default function Authorization({page, valueReg, onChangePages}) {
    return(
    <>
        <Header isBeginPage={true}/>
        <main className='page-main'>
            <section className="main">
                <h1 className="main__title">{valueReg ? page.titleSignUpText : page.titleSignInText}</h1>

                <Outlet />

                <BeginPageBottom
                    onChangePage={onChangePages}
                    signText={!valueReg ? page.signInText : page.signUpText}
                />
            </section>
        </main>
    </>
    );
}