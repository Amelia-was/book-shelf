import React, { useState } from 'react';
import { MdCheckCircle, MdDelete, MdOutlineAddCircle } from "react-icons/md";

const DynamicList = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // check localStorage for savedBooks
    var savedBooks = JSON.parse(localStorage.getItem('savedBooks'));

    // if there is nothing in localStorage, initialize empty list
    if (!savedBooks) {
        savedBooks = [];
    };

    // save books to localStorage
    const saveBooks = () => {
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));
    }

    // add book to list
    const addToList = () => {
        savedBooks.push({
            bookTitle: title,
            bookAuthor: author
        });
        saveBooks();
    };


    return (
        <div className='card'>
            <div className='card-header'>

                <h3>My Favourite Books</h3>
            </div>
            <div className='card-body'>


                <ul>
                    <li className='book-list-item'>
                        <form className='flex-row align-center' onSubmit={
                            e => {
                            e.preventDefault();
                            addToList();
                        }}>

                        <input type='text' id='title' placeholder='Great Expectations' className='mr-1' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type='text' id='author' placeholder='Charles Dickens' className='mr-1' value={author} onChange={(e) => setAuthor(e.target.value)} />
                        <button type='submit' className='icon-btn'>
                            <MdCheckCircle className='icon' />   
                        </button>
                        <MdDelete className='icon d-none' />
                        <MdOutlineAddCircle className='icon d-none' />
                        </form>


                    </li>

                </ul>
            </div>
        </div>
    );
};

export default DynamicList;