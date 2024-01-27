import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Login/>} path='/login'/>
                <Route element={<h1> NOT FOUND </h1>} path='*'/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;