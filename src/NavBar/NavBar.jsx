import { Link } from "react-router-dom";
import React from 'react'
export default function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link className="Link" to="/">Header</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/signUp">SignUp</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
