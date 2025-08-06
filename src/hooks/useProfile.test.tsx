import { renderHook, waitFor } from '@testing-library/react';
import useProfile from './useProfile';
import { DataProvider } from '../context/data';

const customRenderHook = () =>
  renderHook(() => useProfile(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });

  renderHook(() => useProfile(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });


describe('useProfile', () => {
  it('should return profile if not null', async () => {
    const { result } = customRenderHook();
    await waitFor(() => {
      expect(result.current.profile).toBeTruthy();
    })
  });

  it('should return profile object if user is valid', async () => {
    const { result } = customRenderHook();
    await waitFor(() => {
      expect(result.current.profile.email).toEqual('chemar@gmail.com');
    })
  });
/*
  it('getProfile should return profile asynchronously', async () => {
    const { result } = customRenderHook();
    const profile = await result.current.getProfile();

    expect(profile.email).toEqual('chemar@gmail.com');
  });
  */
});
