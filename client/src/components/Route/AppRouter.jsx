import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from '../../App';
import Authorization from '../Auth_&_Reg/Authorization';
import FormRegistration from '../Auth_&_Reg/FormRegistration';
import FormAuthorization from '../Auth_&_Reg/FormAuthorization';
import Header from '../Header';

const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <Header isBeginPage={false}/>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/auth/*"  element={<Authorization />}/>
                    <Route path="/auth/login" element={<FormAuthorization />} />
                    <Route path="/auth/reg" element={<FormRegistration />} />
                </Routes>
            </div>
        </Router>
    );
    }

export default AppRouter;