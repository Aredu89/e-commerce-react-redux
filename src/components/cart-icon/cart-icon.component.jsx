import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartoOpen = useSelector(selectIsCartOpen);

  const handleToggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartoOpen))
  };

  return (
    <CartIconContainer onClick={handleToggleCartOpen}>
      <ShoppingIcon />
      <ItemCount> { cartCount } </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;