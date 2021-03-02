import React from 'react';
import './bookItem.css'

const BookItem = ({book}) => {
    const {title, author, publicationDate, price, coverImg} = book;
    return (<div className='bookItem'>
    <div className='bookCover'>
        <img src={coverImg} alt={title}/>
    </div>
    <div className='bookDetails'>
        <span className='bookTitle'>{title}</span>
        <div className='bookAuthor'>{author}</div>
        <div className='bookPublicationDate'>Publication date: {publicationDate}</div>
        <div className='bookPrice'>${price}</div>
        <button className='btn btn-primary add-to-cart'>Add to cart</button>
    </div>
        
    </div>)
}

export default BookItem;