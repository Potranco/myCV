import { describe, it, expect } from 'vitest';
import { reducer, initialCVState } from './cvReducer'; // Ajusta la ruta según tu estructura de archivos

describe('reducer', () => {
  it('should handle FETCH_START and update status to loading', () => {
    const state = { cv: undefined, status: 'idle', error: null };
    const action = { type: "FETCH_START" };
    expect(reducer(state, action)).toEqual({ cv: undefined, status: 'loading', error: null });
  });

  it('should handle FETCH_SUCCESS and update state with payload and status to success', () => {
    const state = { cv: undefined, status: 'idle', error: null };
    const action = { type: "FETCH_SUCCESS", payload: { name: 'John Doe' } };
    expect(reducer(state, action)).toEqual({ cv: { name: 'John Doe' }, status: 'success', error: null });
  });

  it('should handle FETCH_ERROR and update state with error message and status to error', () => {
    const state = { cv: undefined, status: 'idle', error: null };
    const action = { type: "FETCH_ERROR", error: 'Network Error' };
    expect(reducer(state, action)).toEqual({ cv: undefined, status: 'error', error: 'Network Error' });
  });

  it('should handle CLEAN and reset state to initialCVState', () => {
    const state = { cv: { name: 'John Doe' }, status: 'success', error: null };
    const action = { type: "CLEAN" };
    expect(reducer(state, action)).toEqual(initialCVState);
  });
});
