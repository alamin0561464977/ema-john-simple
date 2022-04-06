import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const products of cart) {
        quantity = quantity + products.quantity;
        total = total + products.price * products.quantity;
        shipping = shipping + products.shipping * products.quantity;

    }
    let tax = (total * 0.1).toFixed(2);
    let Tax = parseFloat(tax)
    let grandTotal = total + shipping + Tax;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h3>Selected Items: {quantity}</h3>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;