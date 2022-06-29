import { memo } from 'react';
import { CartItemProps } from './cart-item.types';

import {
  Name,
  ItemDetails,
  CartItemContainer,
} from './cart-item.styles';

const CartItemComponent = memo(({ item: { imageUrl, price, name, quantity }}: CartItemProps) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{ name }</Name>
      <span>{ quantity } x ${ price }</span>
    </ItemDetails>
  </CartItemContainer>
));

export default CartItemComponent;