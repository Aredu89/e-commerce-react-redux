import { memo } from 'react';
import { CartItem } from '../../store/cart/cart.types';
import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selectors';
import {
  addItemToCart,
  removeItem,
  removeProduct,
} from '../../store/cart/cart.actions';

import {
  Name,
  Quantity,
  Price,
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = memo(({ cartItem }: { cartItem: CartItem}) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);

  const removeItemFromCart = () => dispatch(removeItem(cartItems, cartItem));
  const increaseQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeProductFromCart = () => dispatch(removeProduct(cartItems, cartItem.id));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increaseQuantity}>&#10095;</Arrow>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={removeProductFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
});

export default CheckoutItem;