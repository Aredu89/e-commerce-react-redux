import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStoreAndRouter } from '../../utils/test/test.utils';

import ProductCard from './product-card.component';
import { addItemToCart } from '../../store/cart/cart.actions';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('Product card', () => {
  let props = {
    product: {
      id: 1,
      imageUrl: 'image/url',
      name: 'Product name',
      price: 100
    }
  };
  it('renders a product', () => {
    renderWithStoreAndRouter(<ProductCard {...props} />);
    expect(screen.getByText(props.product.name)).toBeInTheDocument();
    expect(screen.getByText(`$${props.product.price}`)).toBeInTheDocument();
  });
  it('adds a product to the cart', () => {
    renderWithStoreAndRouter(<ProductCard {...props} />);
    const button = screen.getByText('ADD TO CART');
    userEvent.click(button);
    expect(mockDispatch).toHaveBeenCalledWith(addItemToCart([], props.product));
  });
});
