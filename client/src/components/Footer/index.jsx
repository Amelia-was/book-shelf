import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='bg-primary p-4 flex-row align-center'>
            <p className='text-white mr-2'>
                © bookshelf 2022
            </p>
            <a href='https://www.github.com/amelia-was/book-shelf'>
                <AiFillGithub className='text-white' />
            </a>
        </footer>
    );
};

export default Footer;