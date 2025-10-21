import { renderHook } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { vi } from 'vitest';
import { useData } from '../context/data';
import useSkills from './useSkills';

vi.mock('../context/data', () => ({
  useData: vi.fn(),
}));

describe('useSkills', () => {
  it('should return skills when status is success', () => {
    (useData as jest.Mock).mockReturnValue({ state: { cv: { stack_principal: ['JavaScript', 'React'] }, status: 'success' } });
    const { result } = renderHook(() => useSkills());
    expect(result.current.skills).toEqual(['JavaScript', 'React']);
  });

  it('should return null when status is not success', () => {
    (useData as jest.Mock).mockReturnValue({ state: { cv: { stack_principal: ['JavaScript', 'React'] }, status: 'pending' } });
    const { result } = renderHook(() => useSkills());
    expect(result.current.skills).toBeNull();
  });
});
