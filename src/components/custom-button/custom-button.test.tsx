import { render, screen } from '@testing-library/react';

import CustomButton from './custom-button.component';

describe('Custom Button', () => {
  it('renders the base button', () => {
    render(<CustomButton>Hello</CustomButton>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
  it('show the spinner and it is disabled', () => {
    render(<CustomButton isLoading={true}>Hello</CustomButton>);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
