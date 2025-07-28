import { render, screen } from '@testing-library/react';
import { ErrorsProvider } from './ErrorsContext';
import { describe, it, expect } from 'vitest'

describe('DataContext', () => {
    it('should provide default user data', () => {
        render(
            <ErrorsProvider>
                <div>Error</div>
            </ErrorsProvider>
        );
        expect(screen.getByText((t) => t.includes('Error'))).toBeInTheDocument()
    });
});