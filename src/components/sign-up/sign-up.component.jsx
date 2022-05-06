import React, { useState, useContext } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { UserContext } from '../../context/user.context';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("passwords don't match")
      return;
    };

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      await createUserDocumentFromAuth({ ...user, displayName });
      setFormFields(defaultFields);
    } catch (error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email already in use for an user')
      }
      console.log("Error creating user: ", error.message)
    };
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return(
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
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
    </div>
  )
};

export default SignUp;