import { render, screen, waitFor } from '@testing-library/react';
import { DataProvider, useData } from './data';
import { describe, it, expect } from 'vitest'

const MockContextValue = () => {
    const { state } = useData();
    return <div>{JSON.stringify(state.cv?.name)}</div>;
}

describe('DataContext', () => {
    it('should provide default user data', async () => {
        render(
            <DataProvider>
                <MockContextValue />
            </DataProvider>
        );

        await waitFor(() => {
            expect(screen.getByText((t) => t.includes('Chema'))).toBeInTheDocument()
        })
    });
});