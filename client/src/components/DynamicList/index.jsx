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

    // remove book
    const removeBook = (bookTitleInput) => {
        // remove from savedBooksList
        savedBooksList = savedBooksList.filter(book => book.bookTitle !== bookTitleInput);

        // update state
        setSavedBooks(savedBooksList);

        // save to localStorage
        localStorage.setItem('savedBooksList', JSON.stringify(savedBooksList));
    }


    return (
        <div className='card'>
            <div className='card-header'>

                <h3>My Favourite Books</h3>
            </div>
            <div className='card-body'>

                <ul className='mb-2' id='bookList'>
                    {/* gets saved books and render them to the list */}
                    {savedBooks.map(book =>
                           
                            <DynamicListEl
                                key={book.bookTitle}
                                bookTitle={book.bookTitle}
                                bookAuthor={book.bookAuthor}
                                onBookDelete={removeBook}
                            />

                    )}
                </ul>
                <form className='flex-row align-center' onSubmit={
                    e => {
                        e.preventDefault();
                        addToList();
                    }}>

                    <label htmlFor='title' className='d-none'>Enter book title</label>
                    <input type='text' id='title' name='title' placeholder='Book Title' className='mr-1' value={title} onChange={(e) => setTitle(e.target.value)} required/>
                    <label htmlFor='author' className='d-none'>Enter book title</label>
                    <input type='text' id='author' name='author' placeholder='Author' className='mr-1' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
                    <button type='submit' className='icon-btn'>
                        <MdOutlineAddCircle className='icon' />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DynamicList;