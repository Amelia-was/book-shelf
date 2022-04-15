import React from 'react';

const List = () => {
    return(
        <div className='card'>
            <div className='card-header'>

            <h3>My Favourite Books</h3>
            </div>
            <div className='card-body'>

            
        <ul>
            <li className='book-list-item'>
                <span className='book-title'>
                    Pride and Prejudice
                </span>
                <em className='book-author'>
                    Jane Austen
                </em>
            </li>
                <li className='book-list-item'>
                    <span className='book-title'>
                        Sing, Unburied, Sing
                    </span>
                    <em className='book-author'>
                        Jesmyn Ward
                    </em>
                </li>
                <li className='book-list-item'>
                    <span className='book-title'>
                        Disappearing Earth
                    </span>
                    <em className='book-author'>
                        Julia Phillips
                    </em>
                </li>
                <li className='book-list-item'>
                    <span className='book-title'>
                        The Disaster Artist
                    </span>
                    <em className='book-author'>
                        Greg Sestero & Tom Bissell
                    </em>
                </li>
        </ul>
            </div>
        </div>
    );
};

export default List;