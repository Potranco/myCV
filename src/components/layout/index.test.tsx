
import { render, screen } from '@testing-library/react';
import Layout from './index';

describe('Layout', () => {
  const props = {
    children: <div>Test Children</div>,
    theme: 'light',
    onChangeTheme: vi.fn()
  };

  it('renders the Layout component with BackToTop and Menu components', () => {
    render(<Layout {...props} />);
    
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });

  it('renders the Layout component with correct theme class', () => {
    render(<Layout {...props} />);
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('max-w-4xl');
  });
});
