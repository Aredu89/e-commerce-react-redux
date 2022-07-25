import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const result = render(<SignIn />);
    expect(result).toMatchSnapshot();
  });
  it('captures email input', () => {
    render(<SignIn />);
    
    const input = screen.getByTestId('email-input');

    userEvent.type(input, 'hello');

    expect(mockedSetState).toHaveBeenCalledTimes(5);
    expect(mockedSetState).toHaveBeenCalledWith('h');
    expect(mockedSetState).toHaveBeenCalledWith('e');
    expect(mockedSetState).toHaveBeenCalledWith('l');
    expect(mockedSetState).toHaveBeenCalledWith('l');
    expect(mockedSetState).toHaveBeenCalledWith('o');
  });
  it('captures password input', () => {
    render(<SignIn />);
    
    const input = screen.getByTestId('password-input');

    userEvent.type(input, 'pass');
    expect(mockedSetState).toHaveBeenCalledTimes(4);
    expect(mockedSetState).toHaveBeenCalledWith('p');
    expect(mockedSetState).toHaveBeenCalledWith('a');
    expect(mockedSetState).toHaveBeenCalledWith('s');
    expect(mockedSetState).toHaveBeenCalledWith('s');
  });
  it('logs google user', () => {
    render(<SignIn />);
    const button = screen.getByText('SIGN IN WITH GOOGLE');

    userEvent.click(button);
    expect(mockedDispatch).toHaveBeenCalledWith(googleSignInStart());
  });
  it('submits', async () => {
    render(<SignIn />);
    const submitButton = screen.getByRole('button', { name: 'Sign in' });

    userEvent.click(submitButton);

    expect(mockedDispatch).toHaveBeenCalledWith(emailSignInStart('', ''));
  });
});
