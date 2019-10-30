import {createSelector} from 'reselect';

const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    cart => cart.cartItems
);
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity, 0
    )
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItems) => accumalatedQuantity + cartItems.quantity*cartItems.price, 0
    )
)