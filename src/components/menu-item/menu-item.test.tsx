import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MenuItem from './menu-item.component';

const mockedNavigator = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedNavigator
}));

describe('Manu-item component', () => {
  const props = {
    title: 'Title',
    imageUrl: 'image/url',
    linkUrl: 'link/url',
    size: 'large'
  };
  it('renders properly', () => {
    const result = render(
      <BrowserRouter>
        <MenuItem {...props} />
      </BrowserRouter>
    );
    expect(result).toMatchSnapshot();
  })
});
