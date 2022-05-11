import React, { useContext } from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { CartContext } from '../../context/cart.context';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  
  return (
  <div className='product-card-container'>
    <img src={imageUrl} alt={name} />
    <div className='footer'>
      <span className='name'>{ name }</span>
      <span className='price'>${ price }</span>
    </div>
    <CustomButton onClick={addProductToCart} inverted>ADD TO CART</CustomButton>
  </div>
)};

export default ProductCard;