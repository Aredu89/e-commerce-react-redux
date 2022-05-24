import React, { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/strip-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  TestWarning,
} from './checkout.styles.jsx';

const CheckoutPage = () => {
  const { cartItems, total } = useContext(CartContext);
  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem =>(
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span>TOTAL: ${total}</span>
      </Total>
      <TestWarning>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  )
};

export default CheckoutPage;