import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Details from './views/details/Details';
import Home from './views/home/Home';
import LandingPage from './views/landingpage/LandingPage';
import NotFound from './views/notfound/NotFound';

import './App.css'

function App() {
    
    function logout() {
        navigate('/');
    }

    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={ <LandingPage/> }
                />
                <Route 
                    path='/home'
                    element={ <Home/> }
                />
                <Route
                    path='/detail/:id'
                    element={ <Details/> }
                />
                <Route
                    path='*'
                    element={ <NotFound/> }/>
            </Routes>
        </div>
    )
}

export default App;
