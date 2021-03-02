import React from 'react';
import './storeHeader.css';
import {Link} from 'react-router-dom'

const StoreHeader = ({numItems, total}) => {
    return (
        <header className='storeHeader row'>
            <Link to='/'>
            <div className='logo text-dark'>
                bookstore
            </div>
            </Link>
            <Link to='/cart'>
                <div className='shoppingCart'>
                <i className='cartIcon fa fa-shopping-cart'/>
                {numItems} items (${total})
                </div>
            </Link>
        </header>
    )
}

export default StoreHeader;