import React from 'react';
import {useState,useEffect} from 'react';
import {getDatabaseCart, removeFromDatabaseCart, processOrder} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) => {
        const newCart =  cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() =>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
        
    },[]);

    let thankYou;
    if (orderPlaced) {
        thankYou = <img src={happyImage}/>
    }

    return (
        <div className='m-5 row'>
            <div className='col-lg-8'>
            {
                cart.map(pd=><ReviewItem product={pd} removeProduct={removeProduct} key={pd.key}></ReviewItem>)
            }
            {thankYou}
            </div>
            <div className="col-lg-4">
            <Cart cart = {cart}>
                <button className="bg-danger p-2 rounded text-white border-0" onClick = {handlePlaceOrder}>
                    Place Order
                </button>
            </Cart>
            </div>
        </div>
    );
};

export default Review;