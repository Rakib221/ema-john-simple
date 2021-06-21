import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const carts = props.cart;
    // const total = carts.reduce((total,product) => total + product.price,0)
    let total = 0;
    for(let i = 0;i<carts.length;i++){
        const cart = carts[i];
        total = total + cart.price;
    }
    let shipping = 0;
    if(total>335){
        shipping = 0;
    }
    else if(total>115){
        shipping = 2.99;
    }
    else if(total>0){
        shipping = 9.99
    }
    let tax = total*0.020;
    return (
        <div className="cart">
                <h2>Order Summery</h2>
                <h3>Items ordered:{carts.length}</h3>
                <h3>Shipping:{shipping}</h3>
                <h3>Total price:{total}</h3>
                <h3>Tax:{tax}</h3>
                <h3>Total cost:{total+shipping}</h3>
        </div>
    );
};

export default Cart;