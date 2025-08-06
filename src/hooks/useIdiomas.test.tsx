import { renderHook, waitFor } from '@testing-library/react';
import useIdiomas from './useIdiomas';
import { DataProvider } from '../context/data';

const customRenderHook = () =>
  renderHook(() => useIdiomas(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });

  renderHook(() => useIdiomas(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });


describe('useIdioma', () => {
  it('should return idiomas', async() => {
    const { result } = customRenderHook();
    await waitFor(() => {
      expect(result.current.idiomas).toBeTruthy();
    })
  });
/*
  it('getIdiomas should return idiomas asynchronously', async () => {
    const { result } = customRenderHook();
    const idiomas = await result.current.getIdiomas();
    expect(idiomas.length).not.toEqual(0);
  });
  */
});
