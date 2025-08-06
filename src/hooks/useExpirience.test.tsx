import { renderHook, waitFor } from '@testing-library/react';
import useExpirience from './useExpirience';
import { DataProvider } from '../context/data';

const customRenderHook = () =>
  renderHook(() => useExpirience(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });

  renderHook(() => useExpirience(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });


describe('useExpirience', () => {
  it('should return experience', async() => {
    const { result } = customRenderHook();
    await waitFor(() => {
      expect(result.current.experience).toBeTruthy();
    })
  });
/*
  it('getExperience should return experience asynchronously', async () => {
    const { result } = customRenderHook();
    const experience = await result.current.getExperience();
    expect(experience.length).not.toEqual(0);
  });
  */
});
