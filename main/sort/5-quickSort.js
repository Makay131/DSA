function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i, j) => [array[i], array[j]] = [array[j], array[i]];

  const pivot = arr[start];
  let swapIndex = start;

  for(let i = start + 1; i <= end; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4,3,6,8,2,1,-3]))