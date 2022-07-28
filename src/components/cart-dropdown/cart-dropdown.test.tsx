import { screen } from '@testing-library/react';

import CartDropdown from './cart-dropdown.component';
import { CartItem } from '../../store/cart/cart.types';
import { renderWithStoreAndRouter, initialStore } from '../../utils/test/test.utils';
import userEvent from '@testing-library/user-event';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Cart Dropdown', () => {
  it('renders empty cart', async () => {
    renderWithStoreAndRouter(<CartDropdown />);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
  it('has cart items', () => {
    const newStore = {
      ...initialStore,
      cart: {
        ...initialStore.cart,
        cartItems: [{
          quantity: 1,
          id: 1,
          name: 'Item name',
          imageUrl: 'image/url',
          price: 100,
        } as CartItem]
      }
    }
    renderWithStoreAndRouter(<CartDropdown />, newStore);
    expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
    expect(screen.getByText('Item name')).toBeInTheDocument();
  });
  it('navigates to checkout', () => {
    renderWithStoreAndRouter(<CartDropdown />);
    const button = screen.getByText('GO TO CHECKOUT');
    userEvent.click(button);
    expect(mockedUseNavigate).toHaveBeenCalledWith('/checkout');
  });
});
