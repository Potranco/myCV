import { render, screen } from '@testing-library/react'
import ButtonTooltip from './ButtonTooltip'
import './ButtonTooltip.css'

test('renders PDFButton with correct href and attributes', () => {
  render(
    <ButtonTooltip
      href={`${import.meta.env.BASE_URL}Jose_Maria_Rodriguez_Garcia.pdf`}
      tooltip='tooltip'
      text='Link'
    />
  );
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', `${import.meta.env.BASE_URL}Jose_Maria_Rodriguez_Garcia.pdf`);
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
});
