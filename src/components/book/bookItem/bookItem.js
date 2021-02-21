import React, { Fragment } from 'react';
import './bookItem.css'

const BookItem = ({book}) => {
    const {title, author, publicationDate} = book;
    return (<Fragment>
        <span>{title}</span>
        <span>{author}</span>
        <span>{publicationDate}</span>
    </Fragment>)
}

export default BookItem;