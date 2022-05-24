import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import {
  Name,
  Quantity,
  Price,
  CheckoutItemContainer,
  ImageContainer,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItem, removeProduct } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const increaseQuantity = () => addItemToCart(cartItem);
  const removeItemFromCart = () => removeItem(cartItem);
  const removeProductFromCart = () => removeProduct(cartItem.id);

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
};

export default CheckoutItem;