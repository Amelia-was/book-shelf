import React from 'react';
import background from '../../assets/imgs/bookshelf.jpeg';

const Hero = () => {
    return(
        <section className='hero flex-row justify-center align-center' style={{
            backgroundImage: `url(${background})`
        }}>
            <h1>Welcome to my bookshelf.</h1>
        </section>
    );
};

export default Hero;