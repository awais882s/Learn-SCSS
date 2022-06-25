import React from 'react';
import { Link, Outlet } from 'react-router-dom';


export default function Header() {
    return (
        <div>
            {/* <h1 className='div1'>Learn SCSS</h1>
            <div className='div div1'>
                <h2 className='h1'> Heading 1</h2>
            </div>
            <div className="div div2">
                <h3>Heading 3</h3>
            </div>
            <div className="div div3">
                <h4>Heading 4</h4>
            </div> */}
            <header>
                <main>
                    <h1>Learning SCSS</h1>
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
                    <Outlet />
                </main>
            </header>
        </div>
    )
}
