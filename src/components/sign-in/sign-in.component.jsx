import React, { useState } from 'react';
import { auth, signInWithGooglePopup } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch(error) {
      console.log("Error signing in: ", error.message);
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
          <CustomButton type='button' onClick={logGoogleUser} isGoogleSignIn>
            {' '}
            SIGN IN WITH GOOGLE{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;