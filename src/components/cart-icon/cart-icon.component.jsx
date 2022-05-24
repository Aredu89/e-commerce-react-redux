import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = ({ toggleCartHidden }) => {
  const { cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCount> { cartCount } </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;