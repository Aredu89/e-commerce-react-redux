import { cartReducer } from './cart.reducers';
import { CART_ACTION_TYPES } from './cart.types';
import * as actions from './cart.actions';

const initialCart = [
  {
    quantity: 1,
    id: 1,
    imageUrl: 'image/url',
    name: 'Item name',
    price: 100,
  },
];

describe('reducers', () => {
  describe('cart reducer', () => {
    it('sets cart items', () => {
      expect(
        cartReducer(undefined, {
          type: CART_ACTION_TYPES.SET_CART_ITEMS,
          payload: initialCart,
        }),
      ).toEqual({
        isCartOpen: false,
        cartItems: initialCart,
      });
    });
    it('sets is cart open', () => {
      expect(
        cartReducer(undefined, {
          type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
          payload: true,
        }),
      ).toEqual({
        isCartOpen: true,
        cartItems: [],
      });
    });
  });
});

describe('actions', () => {
  describe('setIsCartOpen', () => {
    it('returns type and payload', () => {
      expect(actions.setIsCartOpen(true)).toEqual({
        type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
        payload: true,
      });
    });
  });

  describe('setCartItems', () => {
    it('returns type and payload', () => {
      expect(actions.setCartItems(initialCart)).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: initialCart,
      });
    });
  });

  describe('addItemToCart', () => {
    it('adds a new item', () => {
      expect(
        actions.addItemToCart(initialCart, {
          id: 2,
          imageUrl: 'image/url',
          name: 'Item name 2',
          price: 200,
        }),
      ).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [
          {
            quantity: 1,
            id: 1,
            imageUrl: 'image/url',
            name: 'Item name',
            price: 100,
          },
          {
            quantity: 1,
            id: 2,
            imageUrl: 'image/url',
            name: 'Item name 2',
            price: 200,
          },
        ],
      });
    });
    it('adds one to an exiting item', () => {
      expect(
        actions.addItemToCart(initialCart, {
          id: 1,
          imageUrl: 'image/url',
          name: 'Item name',
          price: 100,
        }),
      ).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [
          {
            quantity: 2,
            id: 1,
            imageUrl: 'image/url',
            name: 'Item name',
            price: 100,
          },
        ],
      });
    });
  });

  describe('removeItem', () => {
    it('removes an existing item', () => {
      expect(
        actions.removeItem(initialCart, {
          quantity: 1,
          id: 1,
          imageUrl: 'image/url',
          name: 'Item name',
          price: 100,
        }),
      ).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [],
      });
    });
    it('removes not existing item', () => {
      expect(
        actions.removeItem(initialCart, {
          quantity: 2,
          id: 2,
          imageUrl: 'image/url',
          name: 'Item name 2',
          price: 200,
        }),
      ).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [
          {
            quantity: 1,
            id: 1,
            imageUrl: 'image/url',
            name: 'Item name',
            price: 100,
          },
        ],
      });
    });
  });

  describe('removeProduct', () => {
    it('removes a product from the cart', () => {
      expect(
        actions.removeProduct(
          [
            {
              quantity: 2,
              id: 1,
              imageUrl: 'image/url',
              name: 'Item name',
              price: 100,
            },
          ],
          1,
        ),
      ).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [],
      });
    });
  });

  describe('cleanCart', () => {
    it('cleans the cart', () => {
      expect(actions.cleanCart()).toEqual({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: [],
      });
    });
  });
});
