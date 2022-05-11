import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../context/cart.context';

import './cart-dropdown.styles.scss';
import { useParams } from 'react-router-dom';

const CartDropdown = () => {
  const { history } = useParams;
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ? (
            cartItems.map(cartItem =>
              <CartItem key={cartItem.id} item={cartItem} />
            )
          ) : (
          <span className='empty-message'>Your cart is empty</span>
          )}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout');
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
};

export default CartDropdown;