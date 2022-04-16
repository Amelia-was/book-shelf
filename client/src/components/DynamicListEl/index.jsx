import React, { useCallback } from 'react'; 
import { MdDelete } from "react-icons/md";

const DynamicListEl = ({ bookTitle, bookAuthor, onBookDelete }) => {

    const handleBookDelete = useCallback(e => {
        onBookDelete(bookTitle)
    }, [onBookDelete, bookTitle]);

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
            <MdDelete className='icon' onClick={handleBookDelete} />
        </li>
    );
};

export default DynamicListEl;