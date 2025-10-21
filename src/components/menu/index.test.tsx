import { render, screen, fireEvent } from '@testing-library/react';
import Menu from './index';

describe('Menu', () => {
  it('should toggle viewMenu when clicking outside', () => {
    render(<Menu theme="light" onChangeTheme={() => {}} />);
    const menu = screen.getByRole('navigation');
    expect(menu).toHaveClass('w-full');

    fireEvent.click(document.body);
    expect(menu).toHaveClass('w-full');
  });

  it('should toggle viewMenu when clicking the menu icon', () => {
    render(<Menu theme="light" onChangeTheme={() => {}} />);
    const menuIcon = screen.getByTitle('Abrir Menu');
    fireEvent.click(menuIcon);
    expect(screen.getByRole('navigation')).toHaveClass('w-full');

    fireEvent.click(menuIcon);
    expect(screen.getByRole('navigation')).toHaveClass('w-full');
  });
});
