import { renderHook, waitFor } from '@testing-library/react';
import useFormacion from './useFormacion';
import { DataProvider } from '../context/data';

const customRenderHook = () =>
  renderHook(() => useFormacion(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });

  renderHook(() => useFormacion(), {
    wrapper: ({ children }) => (
      <DataProvider>
        {children}
      </DataProvider>
    ),
  });


describe('useFormacion', () => {
  it('should return formacion', async() => {
    const { result } = customRenderHook();
    await waitFor(() => {
      expect(result.current.formacion).toBeTruthy();
    })
  });
/*
  it('useFormacion should return formacion asynchronously', async () => {
    const { result } = customRenderHook();
    const formacion = await result.current.getFormacion();
    expect(formacion.length).not.toEqual(0);
  });
  */
});
