import React, { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../firebase/firebase.utils';
import CustomButton, { BUTTON_TYPE_CLASSES } from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log('Error siging in', error.message);
      }
    };
  };

  return(
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={(event) => setEmail(event.target.value)}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={(event) => setPassword(event.target.value)}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={logGoogleUser}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            {' '}
            SIGN IN WITH GOOGLE{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;