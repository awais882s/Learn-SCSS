import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../NavBar/NavBar';
import About from '../About/About';
import SignUp from '../signUp/SignUp';
import Login from '../login/Login';
import Index from '../Header';
import Footer from '../Footer';
export default function Routing() {
    return (
        <div id='root'>
            <BrowserRouter>
                <NavBar />
                <main>
                    <Routes>
                        <Route index element={<Index />} />
                        <Route path="about" element={<About />} />
                        <Route path="signUp" element={<SignUp />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </div >
    )
}
