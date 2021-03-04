import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_REQUEST, BOOK_ADDED_TO_CART, BOOK_DEL_FROM_CART, BOOK_DEC_FROM_CART } from "../actions/actionsTypes";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 220
}

const updateCart = (cartItems, item, index) => {
    if (index === -1) {
        return [...cartItems,
        item]
    }
    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1),
    ]
}

const updateCartItem = (book, item) => {
            if(item) {
                return {
                ...item,
                count: item.count + 1,
                total: book.price + item.total
                }
            } else {
                return {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    total: book.price
                }
            }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_SUCCESS: 
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        case FETCH_BOOKS_REQUEST:
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case BOOK_ADDED_TO_CART:
            const bookId = action.payload
            const book = state.books.find((book) => book.id === bookId)
            const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
            const item = state.cartItems[itemIndex];
            
            const newBook = updateCartItem(book, item)
            
                return {
                ...state, 
                cartItems: updateCart(state.cartItems, newBook, itemIndex)
            }
        case BOOK_DEL_FROM_CART:
            return
        case BOOK_DEC_FROM_CART:
            return
        default: 
            return state;
    }
}

export default reducer;