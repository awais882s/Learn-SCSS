import { Link } from "react-router-dom";
import React from 'react'
export default function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="Link" to="/">Header</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/About">About</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/SignUp">SignUp</Link>
                    </li>
                    <li>
                        <Link className="Link" to="/Login">Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
