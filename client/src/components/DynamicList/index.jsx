import React, { useState } from 'react';
import { MdOutlineAddCircle } from "react-icons/md";
import DynamicListEl from '../DynamicListEl';

const DynamicList = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    // get books from localStorage. if localStorage is empty, initialize empty array
    var savedBooksList = JSON.parse(localStorage.getItem('savedBooksList')) || [];
    const [savedBooks, setSavedBooks] = useState(savedBooksList);

    // add book to list
    const addToList = () => {
        // create new book
        let newBook = {
            bookTitle: title,
            bookAuthor: author
        };

        // update savedBooks in state
        setSavedBooks([...savedBooks, newBook]);

        // add new book to copy of array for localStorage
        savedBooksList.push(newBook);

        // save to localStorage
        localStorage.setItem('savedBooksList', JSON.stringify(savedBooksList));

        // reset form values
        setTitle('');
        setAuthor('');
    };


    return (
        <div className='card'>
            <div className='card-header'>

                <h3>My Favourite Books</h3>
            </div>
            <div className='card-body'>

                <ul className='mb-2' id='bookList'>
                    {savedBooks.map(book =>
                        <DynamicListEl key={book.bookTitle} bookTitle={book.bookTitle} bookAuthor={book.bookAuthor} />
                    )}
                </ul>
                <form className='flex-row align-center' onSubmit={
                    e => {
                        e.preventDefault();
                        addToList();
                    }}>

                    <input type='text' id='title' placeholder='Great Expectations' className='mr-1' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type='text' id='author' placeholder='Charles Dickens' className='mr-1' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <button type='submit' className='icon-btn'>
                        <MdOutlineAddCircle className='icon' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DynamicList;