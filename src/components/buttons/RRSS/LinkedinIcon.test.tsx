import { render, screen } from '@testing-library/react';
import Button from './LinkedinIcon';

test('renders button with correct elements', () => {
  render(<Button />);
  
  const svgElement = screen.getByRole('img');
  expect(svgElement).toBeInTheDocument();
});
