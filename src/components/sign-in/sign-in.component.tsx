import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import CustomButton, { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {SignInContainer, Buttons} from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logGoogleUser = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
    } catch(error) {
      const { code, message } = error as AuthError;
      switch(code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          alert('Incorrect password');
          break;
        case AuthErrorCodes.USER_DELETED:
          alert('User not found');
          break;
        default:
          console.log('Error siging in', message);
      }
    };
  };

  return(
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          data-testid='email-input'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          data-testid='password-input'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label='Password'
          required
        />
        <Buttons>
          <CustomButton
            type='submit'
            value='Submit Form'
            name='Submit Form'
          >
              Sign in
          </CustomButton>
          <CustomButton
            type='button'
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            {' '}
            SIGN IN WITH GOOGLE{' '}
          </CustomButton>
        </Buttons>
      </form>
    </SignInContainer>
  )
}

export default SignIn;