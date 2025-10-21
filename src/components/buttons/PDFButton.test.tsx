
import { render, screen } from '@testing-library/react'
import PDFButton from './PDFButton'
import './PDFButton.css'

test('renders PDFButton with correct href and attributes', () => {
  render(<PDFButton />);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', `${import.meta.env.BASE_URL}/Jose_Maria_Rodriguez_Garcia.pdf`);
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
