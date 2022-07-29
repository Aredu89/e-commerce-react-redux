import { render, screen } from '@testing-library/react';
import Spinner from './spinner.component';

describe('spinner', () => {
  it('renders', () => {
    render(<Spinner />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
