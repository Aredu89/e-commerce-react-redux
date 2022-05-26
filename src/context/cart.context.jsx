import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';

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

export const CartContext = createContext({
  isCartOpen: true,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItem: () => {},
  removeProduct: () => {},
  total: 0,
});

const CART_ACTION_TYPES = {
  'SET_CART_ITEMS': 'SET_CART_ITEMS',
  'TOGGLE_IS_CART_OPEN': 'TOGGLE_IS_CART_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{
    cartItems,
    isCartOpen,
    cartCount,
    total,
  }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  
  const setIsCartOpen = (bool) => {
    dispatch(
      createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN, bool)
    );
  };

  const updateCartItemsReducer = (newCartItems) => {
    const count = newCartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    const total = newCartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        total,
        cartCount: count,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = (addCartItem(cartItems, productToAdd));
    updateCartItemsReducer(newCartItems);
  };

  const removeItem = (productToRemove) => {
    const newCartItems = (removeItemFromCart(cartItems, productToRemove));
    updateCartItemsReducer(newCartItems);
  };

  const removeProduct = (productId) => {
    const newCartItems = (removeProductFromCart(cartItems, productId));
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItem,
    removeProduct,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};