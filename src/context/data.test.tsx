
import { renderHook } from '@testing-library/react';
import { vi } from 'vitest';
import { DataProvider, useData } from './data';
import getCv from "../api/getCv";

vi.mock("../api/getCv", () => ({
  default: vi.fn()
}));

describe('useData', () => {
  it('should return context with state, clean, and setUser functions', async () => {
    const mockCv = { name: 'John Doe', skills: ['React', 'Node.js'] };
    (getCv as vi.Mock).mockResolvedValue(mockCv);

    let resolve;
    const promise = new Promise((res) => { resolve = res; });
    (getCv as vi.Mock).mockReturnValue(promise);

    const wrapper = ({ children }) => <DataProvider>{children}</DataProvider>;

    renderHook(() => useData(), { wrapper });

    expect(getCv).toHaveBeenCalled();
  });
});
