import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            this is the nav
            <ol>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/faq'>
                        FAQ
                    </Link>
                </li>
            </ol>
        </nav>
    );
};

export default Nav;