import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getWrapper, initialStore } from '../../utils/test/test.utils';

import CartIcon from './cart-icon.component';
import { setIsCartOpen } from '../../store/cart/cart.actions';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}));

describe('Cart Icon', () => {
  it('shows count 0', () => {
    getWrapper(<CartIcon />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  it('shows count 2', () => {
    const newStore = {
      ...initialStore,
      cart: {
        ...initialStore.cart,
        cartItems: [
          {
            quantity: 1,
            id: 1,
            name: 'Item 1',
            imageUrl: 'image/url',
            price: 100,
          },
          {
            quantity: 2,
            id: 1,
            name: 'Item 1',
            imageUrl: 'image/url',
            price: 100,
          },
        ]
      }
    };
    getWrapper(<CartIcon />, newStore);
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  it('opens cart', () => {
    getWrapper(<CartIcon />);
    const button = screen.getByTestId('cart-icon-container');
    userEvent.click(button);
    expect(mockUseDispatch).toHaveBeenCalledWith(setIsCartOpen(true));
  });
});
