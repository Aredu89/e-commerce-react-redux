import { render } from '@testing-library/react';
import CartItemComponent from './cart-item.component';

describe('CartItem component', () => {
  const props = {
    item: {
      id: 1,
      imageUrl: 'image/url',
      price: 100,
      name: 'name',
      quantity: 1
    }
  };
  it('render properly', () => {
    const result = render(<CartItemComponent {...props} />);
    expect(result).toMatchSnapshot();
  });
});
