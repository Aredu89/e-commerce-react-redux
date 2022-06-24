import { CartItem } from '../../store/cart/cart.types.js';

import {
  Name,
  ItemDetails,
  CartItemContainer,
} from './cart-item.styles';

const CartItemComponent = ({ item: { imageUrl, price, name, quantity }}: { item: CartItem}) => (
  <CartItemContainer>
    <img src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{ name }</Name>
      <span>{ quantity } x ${ price }</span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItemComponent;