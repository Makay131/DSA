const getDigit = (num, index) => {
  const stringifiedNum = String(num);
  const len = stringifiedNum.length;
  const desiredIndex = len - 1 - index;
  return +stringifiedNum[+desiredIndex] || 0;
}

const digitCount = num => String(num).length;

const mostDigits = nums => {
  let maxDigits = 0;
  for(let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(digitCount(nums[i]), maxDigits);
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let j = 0; j < maxDigitCount; j++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], j);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}