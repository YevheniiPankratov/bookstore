import React from 'react';
import './storeHeader.css';

const StoreHeader = ({numItems, total}) => {
    return (
        <header className='storeHeader row'>
            <a className='logo text-dark' href='#'>bookstore</a>
            <a className='shoppingCart'>
                <i className='cartIcon fa fa-shopping-cart'/>
                {numItems} items (${total})
            </a>
        </header>
    )
}

export default StoreHeader;