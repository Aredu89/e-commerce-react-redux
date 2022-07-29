import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectIsCartOpen } from '../../store/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCurrentUser } from '../../store/user/user.selectors';
import { signOutStart } from '../../store/user/user.action';

import {
  NavigationHeader,
  LogoContainer,
  NavigationOptions,
  NavigationOption,
} from './navigation.styles';

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => {
    dispatch(signOutStart());
  };

  return (
    <>
      <NavigationHeader>
        <LogoContainer onClick={() => navigate('/')}>
          <Logo />
        </LogoContainer>
        <NavigationOptions>
          <NavigationOption onClick={() => navigate('/shop')}>
            SHOP
          </NavigationOption>
          {
            currentUser ? (
              <NavigationOption as='span' onClick={handleSignOut}>
                SIGN OUT
              </NavigationOption>
            ) : (
              <NavigationOption as='span' onClick={() => navigate('/signin')}>
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