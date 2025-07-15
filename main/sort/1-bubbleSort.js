function bubbleSort (arr, comparator = (a,b) => a - b) {
  let swapped;

  do {
    swapped = false;
    for(let i = 0; i < arr.length; i++) {
      if(comparator(arr[i], arr[i+1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped)

  return arr;
}