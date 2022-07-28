import { render, screen } from '@testing-library/react';

import FormInput from './form-input.component';

describe('Form Input', () => {
  it('renders with label', () => {
    render(<FormInput label='Test label' />);
    expect(screen.getByText('Test label')).toBeInTheDocument();
  });
  it('renders with lable shrinked', () => {
    const result = render(<FormInput label='Test lable' value='Test value' readOnly />);
    expect(result).toMatchSnapshot();
  });
  it('renders without lable', () => {
    const result = render(<FormInput />);
    expect(result).toMatchSnapshot();
  });
});
