import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <h3>Selected Items: {props.cart.length}</h3>
        </div>
    );
};

export default Cart;