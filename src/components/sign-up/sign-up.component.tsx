import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../store/user/user.action';
import {SignUpContainer} from './sign-up.styles';

const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords don't match")
      return;
    };

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFields);
    } catch (error) {
      const { code, message } = error as AuthError;
      if(code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Email already in use for an user')
      }
      console.log("Error creating user: ", message)
    };
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return(
    <SignUpContainer>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
};

export default SignUp;