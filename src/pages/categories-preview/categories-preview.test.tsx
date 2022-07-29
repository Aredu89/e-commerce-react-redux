import { screen } from '@testing-library/react';
import { renderWithStoreAndRouter, initialStore } from '../../utils/test/test.utils';

import CategoriesPreviewPage from './categories-preview.component';

describe('Categories preview page', () => {
  it('shows spinner', () => {
    const newStore = {
      ...initialStore,
      categories: {
        ...initialStore.categories,
        isLoading: true,
      }
    };
    renderWithStoreAndRouter(<CategoriesPreviewPage />, newStore);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
  it('renders categories', () => {
    const newStore = {
      ...initialStore,
      categories: {
        ...initialStore.categories,
        categories: [
          {
            title: 'Title test',
            imageUrl: 'image/url',
            items: [{
              id: 1,
              imageUrl: 'image/url',
              name: 'Item name',
              price: 100
            }]
          }
        ],
      }
    };
    renderWithStoreAndRouter(<CategoriesPreviewPage />, newStore);
    expect(screen.getByText('TITLE TEST')).toBeInTheDocument();
    expect(screen.getByText('Item name')).toBeInTheDocument();
  });
});
