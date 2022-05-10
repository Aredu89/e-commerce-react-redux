import React, { useContext, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className='header'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='options'>
          <Link className='option' to='/shop'>
            SHOP
          </Link>
          <Link className='option' to='/contact'>
            CONTACT
          </Link>
          {
            currentUser ? (
              <div className='option' onClick={signOutUser}>
                SIGN OUT
              </div>
            ) : (
              <Link className='option' to='/signin'>
                SIGN IN
              </Link>
            )
          }
          <CartIcon toggleCartHidden={() => setHidden(prevState => !prevState)} />
        </div>
        {
          hidden ? null :
          <CartDropdown cartItems={[]} />
        }
      </div>
      <Outlet />
    </>
  )
};

export default Navigation;