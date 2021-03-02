import { BOOKS_ERROR, BOOKS_LOADED, BOOKS_REQUESTED } from "./actionsTypes"

const booksLoaded = (books) => {
    return {
        type: BOOKS_LOADED,
        payload: books
    }
}

const booksRequested = () => {
    return {
        type: BOOKS_REQUESTED
    }
}

const booksError = (error) => {
    return {
        type: BOOKS_ERROR,
        payload: error
    }
}

export {
    booksLoaded,
    booksRequested,
    booksError
}