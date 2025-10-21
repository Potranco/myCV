// Mock the hook
vi.mock('@/hooks/useFormacion', () => ({
  default: vi.fn(),
}));

import { render, screen } from '@testing-library/react';
import useFormacion from '@/hooks/useFormacion';
import Education from './index';

describe('Education component', () => {
  const mockCourses = ['Course 1', 'Course 2'];

  beforeEach(() => {
    useFormacion.mockReturnValue({ formacion: mockCourses });
  });

  it('should render the education section with courses', () => {
    render(<Education />);
    
    const heading = screen.getByRole('heading', { level: 2, name: /educación/i });
    expect(heading).toBeInTheDocument();

    mockCourses.forEach((course) => {
      const courseElement = screen.getByText(course);
      expect(courseElement).toBeInTheDocument();
    });
  });
});