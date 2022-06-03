import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton, { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.component';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles.jsx';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
  
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