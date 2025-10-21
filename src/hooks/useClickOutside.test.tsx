import { renderHook, fireEvent } from '@testing-library/react';
import { useClickOutside } from './useClickOutside';

test('should call handler on click outside', () => {
  const ref = { current: null };
  const handler = vi.fn();

  renderHook(() => useClickOutside(ref, handler));

  fireEvent.mouseDown(document);
  expect(handler).not.toHaveBeenCalled();

});
