import updateBookList from './bookListR';
import updateShoppingCart from './shoppingCartR'



const reducer = (state, action) => {
    return {
        bookList:updateBookList(state,action),
        shoppingCart: updateShoppingCart(state,action)
    }
}

export default reducer;