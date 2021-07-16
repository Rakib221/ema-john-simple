import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    return (
        <div>
            <h3 className="product">{props.product.name}</h3>
            <h4 className="product-name">Quantity: {props.product.quantity}</h4>
            <h4>price:{props.product.price}</h4>
            <br />
            <button className="bg-danger p-2 rounded text-white border-0" onClick={()=>props.removeProduct(props.product.key)}>RemoveItem</button>
        </div>
    );
};

export default ReviewItem;