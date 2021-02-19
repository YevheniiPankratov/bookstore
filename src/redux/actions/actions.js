import { BOOKS_LOADED } from "./actionsTypes"

const booksLoaded = (books) => {
    return {
        type: BOOKS_LOADED,
        payload: books
    }
}

export {
    booksLoaded
}