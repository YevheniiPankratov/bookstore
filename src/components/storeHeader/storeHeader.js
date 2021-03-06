import React from 'react';
import './storeHeader.css';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

const StoreHeader = ({cartItems, orderTotal}) => {
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
                {cartItems.length} items (${orderTotal})
                </div>
            </Link>
        </header>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        cartItems, orderTotal
    }
}

export default connect(mapStateToProps)(StoreHeader);