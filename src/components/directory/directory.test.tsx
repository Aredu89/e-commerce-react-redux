import { screen } from '@testing-library/react';
import { renderWithStoreAndRouter } from '../../utils/test/test.utils';

import Directory from './directory.component';

describe('Directory', () => {
  const props = {
    sections: [
      {
        title: 'Section title',
        imageUrl: 'image/url',
        id: 1,
        linkUrl: 'link/url',
        size: 'large',
      },
      {
        title: 'Section title 2',
        imageUrl: 'image/url',
        id: 2,
        linkUrl: 'link/url',
        size: 'large',
      },
    ]
  };
  it('renders the sections', () => {
    renderWithStoreAndRouter(<Directory {...props} />);
    expect(screen.getAllByText(/SECTION*/).length).toBe(2);
  });
});
