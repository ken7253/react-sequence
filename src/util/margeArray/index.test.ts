import { describe, test, expect } from 'vitest';
import { margeArray } from '.';

describe('Function to merge two arrays so that they alternate.', () => {
  test('If the array lengths are equal, they are combined alternately with priority given to the first argument.', () => {
    const prev = [1, 3, 5];
    const next = [2, 4, 6];

    const marge = margeArray(prev, next);

    expect(marge).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('If the lengths of the arrays are not equal, the extra values are inserted in the back of the array.', () => {
    const less = [1, 3, 5];
    const more = [2, 4, 6, 'more', 'more', 'more'];

    const marge = margeArray(less, more);

    expect(marge).toStrictEqual([1, 2, 3, 4, 5, 6, 'more', 'more', 'more']);
  });
});
