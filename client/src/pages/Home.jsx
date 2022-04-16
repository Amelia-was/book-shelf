import React from 'react';
import List from '../components/List';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Hero />

            <section className='h-100 flex-row justify-center align-center'>

                <div className='flex-column align-end mr-4'>
                    <h3 className='mb-2'>Welcome!</h3>
                    <p>These are some of my favourite books.</p>
                    <p>Soon you'll be able to sign up and keep track of your favourite books too!</p>
                </div>

                <List />
            </section>

        </>
    );
};

export default Home;