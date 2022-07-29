import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './sign-up.component';
import { signUpStart } from '../../store/user/user.action';

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
    const result = render(<SignUp />);
    expect(result).toMatchSnapshot();
  });
  it('captures email input', () => {
    render(<SignUp />);
    
    const input = screen.getByTestId('email-input');

    userEvent.type(input, 'hello');

    expect(mockedSetState).toHaveBeenCalledTimes(5);
    expect(mockedSetState).toHaveBeenCalledWith({"email": "h"});
    expect(mockedSetState).toHaveBeenCalledWith({"email": "he"});
    expect(mockedSetState).toHaveBeenCalledWith({"email": "hel"});
    expect(mockedSetState).toHaveBeenCalledWith({"email": "hell"});
    expect(mockedSetState).toHaveBeenCalledWith({"email": "hello"});
  });
  it('captures password input', () => {
    render(<SignUp />);
    
    const input = screen.getByTestId('password-input');

    userEvent.type(input, 'pass');
    expect(mockedSetState).toHaveBeenCalledTimes(4);
    expect(mockedSetState).toHaveBeenCalledWith({"password": "p"});
    expect(mockedSetState).toHaveBeenCalledWith({"password": "pa"});
    expect(mockedSetState).toHaveBeenCalledWith({"password": "pas"});
    expect(mockedSetState).toHaveBeenCalledWith({"password": "pass"});
  });
  it('logs google user', () => {
    render(<SignUp />);
    const button = screen.getByText('SIGN UP');

    userEvent.click(button);
    const und = undefined as unknown as string;
    expect(mockedDispatch).toHaveBeenCalledWith(signUpStart(und, und, und));
  });
});
