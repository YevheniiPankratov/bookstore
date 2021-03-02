import React, { Component } from 'react';
import BookItem from '../bookItem/bookItem';
import './bookList.css';
import {connect} from 'react-redux';
import compose from '../../../utils/compose';
import {withBookstoreService} from '../../hoc/withBookstoreService'
import {booksLoaded, booksRequested,booksError} from '../../../redux/actions/actions'
import Spinner from '../../spinner/spinner';
import ErrorIndicator from '../../error/errorIndicator';

class BookList extends Component {

    componentDidMount() {
        const {bookstoreService, 
            booksLoaded, 
            booksRequested,
            booksError} = this.props;
        booksRequested()
        bookstoreService.getBooks()
        .then((data) => {
            booksLoaded(data)
        })
        .catch((error) => booksError(error))
    }

    render () {
        const {books,loading,error} = this.props;
        if(loading) {
            return <Spinner/>
        }

        if(error) {
            return <ErrorIndicator/>
        }


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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispatchToProps = {
    booksLoaded, booksRequested, booksError
}

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList)