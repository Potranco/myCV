import { render, screen } from '@testing-library/react';
import Button from './buttons';

test('renders the button component', () => {
  render(<Button />);
  
  const svgElements = screen.getAllByRole('img');
  expect(svgElements).toHaveLength(5);
});
