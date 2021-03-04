import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST, BOOK_ADDED_TO_CART, BOOK_DEC_FROM_CART, BOOK_DEL_FROM_CART, } from "./actionsTypes"

const booksLoaded = (books) => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: books
    }
}

const booksRequested = () => {
    return {
        type: FETCH_BOOKS_REQUEST
    }
}

const booksError = (error) => {
    return {
        type: FETCH_BOOKS_FAILURE,
        payload: error
    }
}

const bookAddedToCart = (bookId) => {
    return {
        type: BOOK_ADDED_TO_CART,
        payload: bookId
    }
}

const bookDecFromCart = (bookId) => {
    return {
        type: BOOK_DEC_FROM_CART,
        payload: bookId
    }
}

const bookDelFromCart = (bookId) => {
    return {
        type: BOOK_DEL_FROM_CART,
        payload: bookId
    }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested())
    bookstoreService.getBooks()
    .then((data) => {
        dispatch(booksLoaded(data))
    })
    .catch((error) => dispatch(booksError(error)))
}

export {
    fetchBooks,
    bookAddedToCart,
    bookDelFromCart,
    bookDecFromCart,
}