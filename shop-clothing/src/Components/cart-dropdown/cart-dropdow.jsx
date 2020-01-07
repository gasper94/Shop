import React from 'react';
import {connect} from 'react-redux'

// Component
import CustomButton from '../custom-buttom/custom-buttom';
import CartItem from '../cart-item/cart-item';

// Styling
import '../cart-dropdown/cart-dropdown.styles.scss';



const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
            </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStatesToProps =({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStatesToProps)(CartDropdown);