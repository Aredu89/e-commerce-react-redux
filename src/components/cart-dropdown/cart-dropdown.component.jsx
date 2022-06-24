import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selectors';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map(cartItem =>
              <CartItem key={cartItem.id} item={cartItem} />
            )
          ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
      </CartItems>
      <CustomButton onClick={goToCheckout}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  )
};

export default CartDropdown;