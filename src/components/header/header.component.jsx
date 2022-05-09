import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOutUser } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { UserContext } from '../../context/user.context';

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);

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
          <CartIcon />
        </div>
        {/* {
          hidden ? null :
          <CartDropdown />
        } */}
      </div>
      <Outlet />
    </>
  )
};

export default Header;