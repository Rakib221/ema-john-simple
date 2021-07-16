import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img className="mb-2" src={logo} alt="" srcset="" />
            <nav className="mx-5">
                <a href="shop">Shop</a>
                <a href="review">Shop-review</a>
                <a href="order">Orders</a>
            </nav>
        </div>
    );
};

export default Header;