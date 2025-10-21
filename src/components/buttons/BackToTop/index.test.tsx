import { render } from '@testing-library/react';
import BackToTop from './index';

describe('BackToTop', () => {
  it('should not show the button initially', () => {
    const { queryByTitle } = render(<BackToTop />);
    expect(queryByTitle('Ir arriba')).not.toBeInTheDocument();
  });
});
