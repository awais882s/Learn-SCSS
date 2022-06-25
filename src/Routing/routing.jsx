import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';
import Index from '../Header';
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index element={<Index />} />
                    <Route path="About" element={<About />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="Login" element={<Login />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
