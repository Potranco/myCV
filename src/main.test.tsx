import { describe, it, vi } from 'vitest'

// Mock dependencies
vi.mock('react-dom/client', () => ({
    createRoot: vi.fn(() => ({
        render: vi.fn(),
    })),
}))
vi.mock('./App.tsx', () => ({
    default: () => null,
}))
vi.mock('./index.css', () => ({}))

describe('main.tsx', () => {
    it('calls createRoot with the root element and renders App', async () => {
        // Arrange
        const rootElem = document.createElement('div')
        rootElem.id = 'root'
        document.body.appendChild(rootElem)

        const { createRoot } = await import('react-dom/client')

        // Act
        await import('./main')

        // Assert
        expect(createRoot).toHaveBeenCalledWith(rootElem)
        // Clean up
        document.body.removeChild(rootElem)
    })
})