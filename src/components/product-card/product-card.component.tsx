import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.types';
import { addItemToCart } from '../../store/cart/cart.actions';
import { selectCartItems } from '../../store/cart/cart.selectors';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';
import { ProductCardProps } from './product-card.types';

const ProductCard = ({ product }: ProductCardProps) => {
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