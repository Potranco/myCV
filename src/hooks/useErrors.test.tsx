import { renderHook, act } from '@testing-library/react';
import useErrors from './useErrors';
import { ErrorsProvider } from '../context/ErrorsContext';

const customRenderHook = () =>
  renderHook(() => useErrors(), {
    wrapper: ({ children }) => (
      <ErrorsProvider>
        {children}
      </ErrorsProvider>
    ),
  });

  renderHook(() => useErrors(), {
    wrapper: ({ children }) => (
      <ErrorsProvider>
        {children}
      </ErrorsProvider>
    ),
  });


describe('useErrors', () => {
  it('should return errors', () => {
    const { result } = customRenderHook();
    expect(result.current.errors).toBeTruthy();
  });

  it('getErrors should return errors asynchronously', async () => {
    const { result } = customRenderHook();
    
    await act(async () => {
      result.current.addError({ title: 'Test Error', message: 'This is a test error' });
    });
    expect(result.current.errors?.length).toBe(1);
  });
});
