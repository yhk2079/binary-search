import binarySearch from '../binarySearch';

test('binary search', () => {
  expect(binarySearch([], 1)).toEqual(-1);
  expect(binarySearch([1, 5, 7], 5)).toEqual(1);
  expect(binarySearch([1, 5, 7], 10)).toEqual(-1);
});