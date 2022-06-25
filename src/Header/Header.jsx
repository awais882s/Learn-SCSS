import React from 'react';
// import about from '../About/about';
// import contact from '../Contact/contact';
// import signUp from '../signUp/signUp';
// import login from '../login/login';

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
                                <a to="/about">About</a>
                            </li>
                            <li>
                                <a to="/signUp">Sign</a>
                            </li>
                            <li>
                                <a to="/login">Login</a>
                            </li>
                            <li>
                                <a to="/contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </main>
            </header>

        </div>
    )
}
