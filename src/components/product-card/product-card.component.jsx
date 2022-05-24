import React, { useContext } from 'react';

import CustomButton, { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.component';
import { CartContext } from '../../context/cart.context';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);
  
  return (
  <ProductCardContainer>
    <img src={imageUrl} alt={name} />
    <Footer>
      <Name>{ name }</Name>
      <Price>${ price }</Price>
    </Footer>
    <CustomButton
      onClick={addProductToCart}
      buttonType={BUTTON_TYPE_CLASSES.inverted}
    >
      ADD TO CART
    </CustomButton>
  </ProductCardContainer>
)};

export default ProductCard;