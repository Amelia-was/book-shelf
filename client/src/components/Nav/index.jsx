import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    // keeps track of nav bar state
    const navLinks = ['Home', 'About', 'FAQ'];
    const [navActive, setNavActive] = useState(navLinks[0]);

    return (
        <nav className='bg-primary flex-row justify-between align-center p-4'>
            <h2>bookshelf</h2>
            <ul>
                <li>
                    <Link 
                        to='/' 
                        className={`mr-2 ${navActive === 'Home' ? 'nav-active' : ''}`}
                        onClick={() => {setNavActive('Home')}}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/about'
                        className={`mr-2 ${navActive === 'About' ? 'nav-active' : ''}`}
                        onClick={() => { setNavActive('About') }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/faq'
                        className={`mr-2 ${navActive === 'FAQ' ? 'nav-active' : ''}`}
                        onClick={() => { setNavActive('FAQ') }}
                    >
                        FAQ
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;