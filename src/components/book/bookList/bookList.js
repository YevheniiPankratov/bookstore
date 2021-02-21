import React, { Component } from 'react';
import BookItem from '../bookItem/bookItem';
import './bookList.css';
import {connect} from 'react-redux';

class BookList extends Component {

    render () {
        const {books} = this.props;
        return (
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}><BookItem book={book}/></li>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({books}) => {
    return {
        books: books
    }
}

export default connect(mapStateToProps, )(BookList)