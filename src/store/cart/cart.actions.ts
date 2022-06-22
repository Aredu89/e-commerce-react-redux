import { CategoryItem } from '../categories/categories.types';
import { CART_ACTION_TYPES, CartItem } from './cart.types';
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.reduce(
      (acc, cartItem) =>
        cartItem.id === productToAdd.id
          ? [...acc, { ...cartItem, quantity: cartItem.quantity + 1 }]
          : [...acc, cartItem],
      [] as CartItem[],
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem,
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id,
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.reduce(
    (acc, cartItem) =>
      cartItem.id === productToRemove.id
        ? [...acc, { ...cartItem, quantity: cartItem.quantity - 1 }]
        : [...acc, cartItem],
    [] as CartItem[],
  );
};

const removeProductFromCart = (
  cartItems: CartItem[],
  productId: number,
): CartItem[] => {
  return cartItems.filter((cartItem) => cartItem.id !== productId);
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean),
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems),
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem,
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItem = (
  cartItems: CartItem[],
  productToRemove: CartItem,
): SetCartItems => {
  const newCartItems = removeItemFromCart(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

export const removeProduct = (
  cartItems: CartItem[],
  productId: number,
): SetCartItems => {
  const newCartItems = removeProductFromCart(cartItems, productId);
  return setCartItems(newCartItems);
};

export const cleanCart = (): SetCartItems => {
  return setCartItems([]);
};
