import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import CartDropdown from './cart-dropdown.component';
import { rootReducer } from '../../store/root-reducer';
import { CartItem } from '../../store/cart/cart.types';
import { RootState } from '../../store/store';

const mockedUseNavigate = jest.fn();

let initialStore: RootState = {
  user: {
    currentUser: null,
    isLoading: false,
    error: null,
  },
  categories: {
    categories: [],
    isLoading: false,
    error: null,
  },
  cart: {
    isCartOpen: false,
    cartItems: [],
  }
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe('Cart Dropdown', () => {
  const getWrapper = () => {
    const mockStore = createStore(rootReducer, initialStore);
    return render(
    <Provider store={mockStore}>
      <CartDropdown />
    </Provider>
  )};
  it('renders empty cart', async () => {
    getWrapper();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });
  it('has cart items', () => {
    initialStore = {
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
    getWrapper();
    expect(screen.queryByText('Your cart is empty')).not.toBeInTheDocument();
    expect(screen.getByText('Item name')).toBeInTheDocument();
  });
});
