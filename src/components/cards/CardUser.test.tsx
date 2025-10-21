vi.mock("../../hooks/useProfile", () => ({
  default: vi.fn(),
}));

import { render, screen } from '@testing-library/react';
import useProfile from "../../hooks/useProfile";
import CardUser from "./CardUser";

describe('CardUser', () => {
  it('should display loading state when profile is not available', () => {
    useProfile.mockReturnValue({ profile: null });
    render(<CardUser />);
    expect(screen.getByText(/No user data available/i)).toBeInTheDocument();
  });

  it('should display user details when profile is available', () => {
    const mockProfile = {
      name: 'John Doe',
      titulo: 'Software Engineer',
      email: 'john.doe@example.com',
      linkedin: 'https://linkedin.com/in/johndoe',
      github: 'https://github.com/johndoe'
    };
    useProfile.mockReturnValue({ profile: mockProfile });
    render(<CardUser />);
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Software Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
  });
});
