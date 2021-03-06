import {BOOK_ADDED_TO_CART, BOOK_DEL_FROM_CART, BOOK_DEC_FROM_CART } from "../actions/actionsTypes";

const updateCart = (cartItems, item, index) => {

    if (item.count === 0) {
        return [
        ...cartItems.slice(0, index),
        ...cartItems.slice(index + 1),
        ]
    }

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

const updateCartItem = (book, item = {}, quantity) => {
    
    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0 } = item;   

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state
    const book = books.find(({id}) => id === bookId)
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];
    const newBook = updateCartItem(book, item, quantity)
    
    const ordTotal = cartItems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total;
      }, book.price);
    
          return {
            orderTotal: ordTotal, 
            cartItems: updateCart(cartItems, newBook, itemIndex)
            }
}

const updateShoppingCart = (state, action) => {
    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }
    switch(action.type) {
        case BOOK_ADDED_TO_CART:
            return updateOrder(state, action.payload, 1)

        case BOOK_DEC_FROM_CART:
            return updateOrder(state, action.payload, -1)

        case BOOK_DEL_FROM_CART:
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload)
            return updateOrder(state, action.payload, -item.count)
        default: 
            return state.shoppingCart
    }
}

export default updateShoppingCart;