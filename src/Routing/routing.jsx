import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../About/about';
import Contact from '../Contact/contact';
import SignUp from '../SignUp/signUp';
import Login from '../Login/login';
import Index from '../Header';

export default function routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Index />} />
                    <Route path="About" element={<About />} />
                    <Route path="Contact" element={<Contact />} />
                    <Route path="SignUp" element={<SignUp />} />
                    <Route path="Login" element={<Login />} />
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
