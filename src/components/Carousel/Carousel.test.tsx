import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('renders carousel with items', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  render(<Carousel items={items} />);
  
  items.forEach(item => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
});




