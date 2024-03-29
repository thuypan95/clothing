import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({cartItem:{imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt='item'/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{price}x{quantity}</span>
            </div>
        </div>
    )   
}
export default CartItem;
