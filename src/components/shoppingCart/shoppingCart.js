import React from 'react';
import { connect } from 'react-redux';
import { bookDecFromCart, bookDelFromCart,bookAddedToCart } from '../../redux/actions/actions';
import './shoppingCart.css';

const ShoppingCart = ({cartItems, total, onInc, onDec, onDel}) => {
    const renderItemRow = (item, index) => {
        const {id, title, count, total} = item
        return (
            <tr key={id}>
            <td>{index + 1}</td>
            <td>{title}</td>
            <td>{count}</td>
            <td>${total}</td>
            <td>
            <button onClick={() => onDel(id)}
            className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
            <button onClick={() => onInc(id)}
             className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
            </button>
            <button onClick={() => onDec(id)}
             className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
            </button>
            </td>
        </tr>
        )
    }
    return (
        <div className='shoppingCart'>
            <h2>Order</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Book</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    { cartItems.map(renderItemRow) }
                </tbody>
            </table>
            <div className='total'>
                Total: $201
            </div>
        </div>
    )
}

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => {
    return {
        cartItems, total: orderTotal
    }
}

const mapDispatchToProps = {
        onInc: bookAddedToCart,
        onDec: bookDecFromCart,
        onDel: bookDelFromCart,
}
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);