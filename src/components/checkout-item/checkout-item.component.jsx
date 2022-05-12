import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItem, removeProduct } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const increaseQuantity = () => addItemToCart(cartItem);
  const removeItemFromCart = () => removeItem(cartItem);
  const removeProductFromCart = () => removeProduct(cartItem.id);

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemFromCart}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increaseQuantity}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className='remove-button' onClick={removeProductFromCart}>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;