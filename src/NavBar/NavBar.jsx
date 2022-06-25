import { Link } from "react-router-dom";
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Header</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/SignUp">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
