import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const products of cart) {
        total = total + products.price;
        shipping = shipping + products.shipping;
        console.log(shipping)

    }
    let tax = (total * 0.1).toFixed(2);
    let Tax = parseFloat(tax)
    let grandTotal = total + shipping + Tax;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h3>Selected Items: {props.cart.length}</h3>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;