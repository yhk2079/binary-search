const binarySearch = function (arr: number[], target: number) {
  let left = 0,
      right = arr.length - 1;

  while (left < right) {
    // Note: why not (right + left) / 2 ? Prevent overflow .
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    else if (arr[mid] < target) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return arr[left] === target ? left : -1;
}

export default binarySearch;