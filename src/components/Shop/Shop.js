import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    const [cart,setCart] = useState([]);
    const handleAddProduct = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            {
                products.map(product =><Product handleAddProduct = {handleAddProduct} product = {product}></Product>)
            }
            </div>
            <div className="cart-container">
                <div>
                    <Cart cart = {cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;