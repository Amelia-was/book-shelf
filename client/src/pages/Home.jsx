import React from 'react';
import List from '../components/List';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
        <Hero />

        <section className='h-100'>

            <p>this is the Home page</p>

            <List />
        </section>

        </>
    );
};

export default Home;