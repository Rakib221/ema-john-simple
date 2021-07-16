import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    return (
        <div>
            <div className=" border rounded border-primary p-3 m-2">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div>
                <h4><Link to={"/product/"+props.product.key}>{props.product.name}</Link></h4>
                <h5>Price:${props.product.price}</h5>
                <p>Stock <strong>{props.product.stock}</strong> only.Order soon.</p>
                <p>By:{props.product.seller}</p>
                {
                    props.showAddToCart === true &&  <button className="rounded p-1 bg-danger border-0 p-2m text-white"onClick = {()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                }
            </div>
        </div>
        </div>
    );
};

export default Product;