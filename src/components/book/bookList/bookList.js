import React, { Component } from 'react';
import BookItem from '../bookItem/bookItem';
import './bookList.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import compose from '../../../utils/compose';
import {withBookstoreService} from '../../hoc/withBookstoreService'
import {fetchBooks, bookAddedToCart} from '../../../redux/actions/actions'
import Spinner from '../../spinner/spinner';
import ErrorIndicator from '../../error/errorIndicator';

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='bookList'>
            {books.map((book) => {
                return (
                    <li key={book.id}><BookItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/></li>
                )
            })}
        </ul>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render () {
        const {books,loading,error, onAddedToCart} = this.props;
        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorIndicator/>
        }
        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return bindActionCreators({
        fetchBooks: fetchBooks(bookstoreService),
        onAddedToCart: bookAddedToCart
        }, dispatch)
}

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer)