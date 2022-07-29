import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RootState } from '../../store/store';
import { renderWithStoreAndRouter, initialStore } from '../../utils/test/test.utils';

import CheckoutItem from './checkout-item.component';
import { CartItem } from '../../store/cart/cart.types';
import {
  addItemToCart,
  removeItem,
  removeProduct,
} from '../../store/cart/cart.actions';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}));

describe('Checkout item', () => {
  const props: { cartItem: CartItem } = {
    cartItem: {
      quantity: 3,
      id: 1,
      imageUrl: 'iage/url',
      name: 'Item 1',
      price: 100
    }
  };
  const newStore: RootState = {
    ...initialStore,
    cart: {
      ...initialStore.cart,
      cartItems: [props.cartItem],
    }
  };
  it('shows the name, price and quantity', () => {
    renderWithStoreAndRouter(<CheckoutItem {...props} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  it('removes item from cart', async () => {
    renderWithStoreAndRouter(<CheckoutItem {...props} />, newStore);
    const button = screen.getByText('❮');
    userEvent.click(button);
    expect(mockUseDispatch).toHaveBeenCalledWith(removeItem(newStore.cart.cartItems, props.cartItem));
  });
  it('adds item to cart', async () => {
    renderWithStoreAndRouter(<CheckoutItem {...props} />, newStore);
    const button = screen.getByText('❯');
    userEvent.click(button);
    expect(mockUseDispatch).toHaveBeenCalledWith(addItemToCart(newStore.cart.cartItems, props.cartItem));
  });
  it('removes product from cart', () => {
    renderWithStoreAndRouter(<CheckoutItem {...props} />, newStore);
    const button = screen.getByText('✕');
    userEvent.click(button);
    expect(mockUseDispatch).toHaveBeenCalledWith(removeProduct(newStore.cart.cartItems, props.cartItem.id));
  });
});
