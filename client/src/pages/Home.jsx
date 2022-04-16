import React from 'react';
import List from '../components/List';
import DynamicList from '../components/DynamicList';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Hero />

            <section className='h-100 p-4 flex-row justify-center align-center'>

                <div className='flex-column mr-4'>
                    <h3 className='mb-2'>Welcome!</h3>
                    <p>These are some of my favourite books. Add books to your favourites list on the right.</p>
                    <p className='mb-3'>Soon you'll be able to sign up and see what everyone else is reading!</p>

                <List />

                </div>

                <DynamicList />
            </section>

        </>
    );
};

export default Home;