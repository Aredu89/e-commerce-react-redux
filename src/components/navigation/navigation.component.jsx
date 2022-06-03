import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selectors';

import {
  NavigationHeader,
  LogoContainer,
  NavigationOptions,
  NavigationOption,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationHeader>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <NavigationOptions>
          <NavigationOption to='/shop'>
            SHOP
          </NavigationOption>
          {
            currentUser ? (
              <NavigationOption as='span' onClick={signOutUser}>
                SIGN OUT
              </NavigationOption>
            ) : (
              <NavigationOption to='/signin'>
                SIGN IN
              </NavigationOption>
            )
          }
          <CartIcon />
        </NavigationOptions>
        { isCartOpen && <CartDropdown /> }
      </NavigationHeader>
      <Outlet />
    </>
  )
};

export default Navigation;