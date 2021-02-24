import React from 'react';
import BookList from '../book/bookList/bookList';
import ShoppingCart from '../shoppingCart/shoppingCart';

const HomePage = () => {
    return (<div>
        <BookList/>
        <ShoppingCart/>
    </div>)
}

export default HomePage;