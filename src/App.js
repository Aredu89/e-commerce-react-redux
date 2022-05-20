import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='/signin' element={<SignInAndSignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
