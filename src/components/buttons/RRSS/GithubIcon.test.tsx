
import { render, screen } from '@testing-library/react';
import GitHubIcon from './GithubIcon';

test('renders GitHubIcon component', () => {
  render(<GitHubIcon />);
  
  const svgElement = screen.getByRole('img', { hidden: true });
  expect(svgElement).toBeInTheDocument();
});
