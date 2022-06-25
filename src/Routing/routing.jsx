import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../About/About';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';
import Index from '../Header';

export default function Routing() {
    return (
        <div>
            <BrowserRouter>
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
