import React from 'react';
import List from '../components/List';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
        <Hero />

        <section className='h-100 flex-row justify-center align-center'>

            <p>These are some of my favourite books. Soon you'll be able to sign up and keep track of your favourite books too!</p>

            <List />
        </section>

        </>
    );
};

export default Home;