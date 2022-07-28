import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithStoreAndRouter } from '../../utils/test/test.utils';
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
    const result = renderWithStoreAndRouter(<MenuItem {...props} />);
    expect(result).toMatchSnapshot();
  });
  it('navigates to link url', () => {
    renderWithStoreAndRouter(<MenuItem {...props} />);
    const childEl = screen.getByText('TITLE');
    userEvent.click(childEl);
    expect(mockedNavigator).toHaveBeenCalledWith(props.linkUrl);
  });
});
