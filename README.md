## lower bound
```
function lowerBound(arr, target) {
  let left = 0,
      right = arr.length;  // Note: because [0:n] are possible index , not only [0:n - 1] .
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] < target) {
      left = mid + 1
    }
    else {
      right = mid;
    }
  }
  return left;
}
```

## upper bound
```
function upperBound(arr, target) {
  let left = 0;
  let right = arr.length; // Note: because [0:n] are possible index , not only [0:n - 1] .
  while (left < right) {
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
```
