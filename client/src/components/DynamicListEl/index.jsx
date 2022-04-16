import React from 'react';

const DynamicListEl = () => {
    return (
        <li className='book-list-item'>
            <span className='book-title'>
                Pride and Prejudice
            </span>
            <em className='book-author'>
                Jane Austen
            </em>
        </li>
    );
};

export default DynamicListEl;