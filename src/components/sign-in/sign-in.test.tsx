import { shallow } from 'enzyme';
import SignIn from './sign-in.component';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';

const mockedDispatch = jest.fn();
const mockedSetState = jest.fn();
const mockedUseState = ['', mockedSetState];

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: () => mockedUseState
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockedDispatch
}));

describe('Sign-in component', () => {
  it('renders properly', () => {
    expect(shallow(<SignIn />)).toMatchSnapshot();
  });
  it('captures email input', async () => {
    const wrapper = shallow(<SignIn />);
    
    const input = wrapper.find('FormInput[name="email"]');

    await input.simulate('change', {
      target: { value: 'hello' }
    });
    expect(mockedSetState).toHaveBeenCalledWith('hello')
  });
  it('captures password input', () => {
    const wrapper = shallow(<SignIn />);
    
    const input = wrapper.find('FormInput[name="password"]');

    input.simulate('change', {
      target: { value: 'pass' }
    });
    expect(mockedSetState).toHaveBeenCalledWith('pass')
  });
  it('logs google user', () => {
    const wrapper = shallow(<SignIn />);
    const button = wrapper.find('CustomButton[type="button"]');

    button.simulate('click');
    expect(mockedDispatch).toHaveBeenCalledWith(googleSignInStart());
  });
  it('submits', () => {
    const wrapper = shallow(<SignIn />);
    const form = wrapper.find('form');

    form.simulate('submit', { preventDefault: () => null });
    expect(mockedDispatch).toHaveBeenCalledWith(emailSignInStart('', ''));
  });
});
