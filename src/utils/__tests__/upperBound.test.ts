import upperBound from '../upperBound';

test('find lower bound index', () => {
  expect(upperBound([0, 1, 1, 2], -1)).toEqual(0);  // Note: return index 0 .
  expect(upperBound([0, 1, 1, 2], 1)).toEqual(3);   // Note: return index 1 .
  expect(upperBound([0, 1, 1, 2], 2)).toEqual(4);   // Note: return index 3 .
  expect(upperBound([0, 1, 1, 2], 41)).toEqual(4);  // Note: return index 4 .
  expect(upperBound([0], 10)).toEqual(1);           // Note: return index 1 .
});