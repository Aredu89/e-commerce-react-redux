import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
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
    expect(shallow(
      <BrowserRouter>
        <MenuItem {...props} />
      </BrowserRouter>
    )).toMatchSnapshot();
  })
});
