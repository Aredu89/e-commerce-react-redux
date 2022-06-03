import { CART_ACTION_TYPES } from './cart.types';
import { createAction } from '../../utils/reducer/reducer.utils';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.reduce(
      (acc, cartItem) => cartItem.id === productToAdd.id
        ? [ ...acc, { ...cartItem, quantity: cartItem.quantity + 1 }]
        : [ ...acc, cartItem]
    , []);
  };

  return [ ...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  };

  return cartItems.reduce(
    (acc, cartItem) => cartItem.id === productToRemove.id
      ? [ ...acc, { ...cartItem, quantity: cartItem.quantity - 1 }]
      : [ ...acc, cartItem]
  , []);
};

const removeProductFromCart = (cartItems, productId) => {
  return cartItems.filter((cartItem) => cartItem.id !== productId);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = (addCartItem(cartItems, productToAdd));
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItem = (cartItems, productToRemove) => {
  const newCartItems = (removeItemFromCart(cartItems, productToRemove));
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeProduct = (cartItems, productId) => {
  const newCartItems = (removeProductFromCart(cartItems, productId));
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
