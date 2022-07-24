const upperBound = function (arr: number[], target: number) {
  let left = 0,
      right = arr.length; 

  while (left < right) {
    // Note: why not (right + left) / 2 ? Prevent overflow .
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] <= target) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return left;
}

export default upperBound;