import { render, screen } from '@testing-library/react';
import { DataProvider, useData } from './data';
import { describe, it, expect } from 'vitest'

const MockContextValue = () => {
    const { user } = useData();
    return <div>{JSON.stringify(user?.name)}</div>;
}

describe('DataContext', () => {
    it('should provide default user data', () => {
        render(
            <DataProvider>
                <MockContextValue />
            </DataProvider>
        );
        expect(screen.getByText((t) => t.includes('José'))).toBeInTheDocument()
    });
});