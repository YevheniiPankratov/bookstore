import React, { Component } from 'react';
import BookItem from '../bookItem/bookItem';
import './bookList.css';
import {connect} from 'react-redux';
import compose from '../../../utils/compose';
import {withBookstoreService} from '../../hoc/withBookstoreService'
import {booksLoaded} from '../../../redux/actions/actions'

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        
        this.props.booksLoaded(data)
    }

    render () {
        const {books} = this.props;
        return (
            <ul className='bookList'>
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

const mapDispatchToProps = {
    booksLoaded
}

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList)