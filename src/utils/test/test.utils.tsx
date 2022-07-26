import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore } from 'redux';

import { rootReducer } from '../../store/root-reducer';
import { RootState } from '../../store/store';

export const initialStore: RootState = {
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

export const getWrapper = (children: JSX.Element, store = initialStore) => {
  const mockStore = createStore(rootReducer, store);
  return render(
    <Provider store={mockStore}>{children}</Provider>
  );
};
