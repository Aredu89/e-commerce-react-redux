import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStoreAndRouter, initialStore } from '../../utils/test/test.utils';

import Navigation from './navigation.component';
import { signOutStart } from '../../store/user/user.action';

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Navigation', () => {
  it('renders properly', () => {
    renderWithStoreAndRouter(<Navigation />);
    expect(screen.getByText('SHOP')).toBeInTheDocument();
    expect(screen.getByText('SIGN IN')).toBeInTheDocument();
  });
  it('navigates to home', () => {
    renderWithStoreAndRouter(<Navigation />);
    const logo = screen.getByText('crown.svg');
    userEvent.click(logo);
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
  it('navigates to shop', () => {
    renderWithStoreAndRouter(<Navigation />);
    const button = screen.getByText('SHOP');
    userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/shop');
  });
  it('navigates to sign in', () => {
    renderWithStoreAndRouter(<Navigation />);
    const button = screen.getByText('SIGN IN');
    userEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/signin');
  });
  it('signs out when there is current user', () => {
    const newStore = {
      ...initialStore,
      user: {
        ...initialStore.user,
        currentUser: {
          createdAtDate: new Date(),
          displayName: 'User name',
          email: 'user@user.com'
        }
      }
    };
    renderWithStoreAndRouter(<Navigation />, newStore);
    expect(screen.getByText('SIGN OUT')).toBeInTheDocument();
    const button = screen.getByText('SIGN OUT');
    userEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());
  });
  it('shows cart dropdown', () => {
    const newStore = {
      ...initialStore,
      cart: {
        ...initialStore.cart,
        isCartOpen: true
      }
    };
    renderWithStoreAndRouter(<Navigation />, newStore);
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
});
