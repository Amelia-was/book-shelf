import React from 'react';
import { MdDelete } from "react-icons/md";

const DynamicListEl = ({ bookTitle, bookAuthor }) => {
    return (
        <li className='book-list-item flex-row align-center justify-between'>
            <span>
                <span className='book-title'>
                    {bookTitle}
                </span>
                <em className='book-author'>
                    {bookAuthor}
                </em>
            </span>

            <MdDelete className='icon' />
        </li>
    );
};

export default DynamicListEl;