import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  const onChangeThemeMock = vi.fn();
  
  it('renders the footer with correct text and clickable theme', () => {
    render(<Footer onChangeTheme={onChangeThemeMock} theme="dark" />);
    
    expect(screen.getByText('© 2025 Chema')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Pagespeed/i })).toHaveAttribute('href', 'https://pagespeed.web.dev/analysis/https-potranco-github-io-myCV/4y8f11jmzl?form_factor=mobile');
    

  });
});
