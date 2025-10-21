import { render } from '@testing-library/react'
import PageComponent from './page'

describe('PageComponent', () => {
  it('renders children correctly', () => {
    const text = 'Test Children'
    const { getByText } = render(<PageComponent>{text}</PageComponent>)
    expect(getByText(text)).toBeInTheDocument()
  })

  it('applies the className prop correctly', () => {
    const testClass = 'test-class'
    const { container } = render(<PageComponent className={testClass}>Test Children</PageComponent>)
    expect(container.firstChild).toHaveClass(testClass)
  })
})
