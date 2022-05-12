import { createContext, useState, useEffect } from 'react';

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
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItem: () => {},
  removeProduct: () => {},
  total: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    setCartCount(count);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0);
    setTotal(total);
  }, [cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItem = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };

  const removeProduct = (productId) => {
    setCartItems(removeProductFromCart(cartItems, productId));
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