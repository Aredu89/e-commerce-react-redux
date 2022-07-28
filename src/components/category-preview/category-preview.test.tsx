import { screen } from '@testing-library/react';
import { renderWithStoreAndRouter } from '../../utils/test/test.utils';

import CategoryPreview from './category-preview.component';

describe('Category preview', () => {
  let props = {
    title: 'Title',
    items: [
      {
        id: 1,
        imageUrl: 'image/url',
        name: 'Item name',
        price: 100,
      }
    ]
  };
  it('renders properly', () => {
    const result = renderWithStoreAndRouter(<CategoryPreview {...props} />);
    expect(result).toMatchSnapshot();
  });
  it('shows the title', () => {
    renderWithStoreAndRouter(<CategoryPreview {...props} />);
    expect(screen.getByText('TITLE')).toBeInTheDocument();
  });
  it('renders only 4 items', () => {
    props = {
      ...props,
      items: [
        {
          id: 1,
          imageUrl: 'image/url',
          name: 'Item name',
          price: 100,
        },
        {
          id: 2,
          imageUrl: 'image/url',
          name: 'Item name 2',
          price: 100,
        },
        {
          id: 3,
          imageUrl: 'image/url',
          name: 'Item name 3',
          price: 100,
        },
        {
          id: 4,
          imageUrl: 'image/url',
          name: 'Item name 4',
          price: 100,
        },
        {
          id: 5,
          imageUrl: 'image/url',
          name: 'Item name 5',
          price: 100,
        },
      ]
    };
    renderWithStoreAndRouter(<CategoryPreview {...props} />);
    expect(screen.getAllByText('ADD TO CART').length).toBe(4);
  });
});
