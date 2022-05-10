import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './product-card.styles.scss';

const ProductCard = ({
  product,
  addProduct,
}) => {
  const { name, price, imageUrl } = product;
  return (
  <div className='product-card-container'>
    <img src={imageUrl} alt={name} />
    <div className='footer'>
      <span className='name'>{ name }</span>
      <span className='price'>${ price }</span>
    </div>
    <CustomButton onClick={() => addProduct(product)} inverted>ADD TO CART</CustomButton>
  </div>
)};

export default ProductCard;