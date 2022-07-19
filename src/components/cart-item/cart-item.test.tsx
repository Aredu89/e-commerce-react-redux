import { shallow } from 'enzyme';
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
    expect(shallow(<CartItemComponent {...props} />)).toMatchSnapshot();
  });
});
