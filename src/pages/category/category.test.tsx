import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { render, screen } from '@testing-library/react';
import Category from './category.component';

describe('Category component', () => {
  it('renders properly', () => {
    const mockedStore = {
      categories: {
        categories: [
          {
            items: [
              {
                id: 1,
                imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                name: "Brown Brim",
                price: 25
              },
              {
                id: 2,
                imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                name: "Blue Beanie",
                price: 18
              }
            ],
            title: 'Hats'
          }
        ]
      }
    }
    const result = render(
      <Provider store={store}>
        <Category />
      </Provider>
    );
  });
});
