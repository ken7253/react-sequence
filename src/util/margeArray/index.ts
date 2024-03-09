/**
 * Function to merge two arrays so that they alternate.
 * @param prev 2n
 * @param next 2m + 1
 * @returns Merged array
 */
export const margeArray = <T, U>(prev: T[], next: U[]) => {
  return prev.reduce(
    (acc, current, index, arr) => {
      const rest = typeof arr[index + 1] === 'undefined' ? next.slice(index + 1) : [];

      if (typeof next[index] !== 'undefined') {
        return [...acc, current, next[index], ...rest];
      } else {
        return [...acc, current, ...rest];
      }
    },
    [] as (T | U)[],
  );
};
