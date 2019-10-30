import React from 'react';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import ButtonCustom from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
       
const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
            {
                cartItems.length > 0
                ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>))
                :
                (<span className="empty-message">Your cart is empty!</span>)
            }
            </div>
            <ButtonCustom onClick={()=>{
                history.push('/checkout');
                dispatch(toggleCartHidden());
                }}>CHECKOUT</ButtonCustom>
        </div>
    )
}   
const mapStateToProps =  createStructuredSelector({
    cartItems: selectCartItems
}); 
export default withRouter(connect(mapStateToProps)(CartDropdown));