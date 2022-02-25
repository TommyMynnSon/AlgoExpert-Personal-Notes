function twoNumberSum(array, targetSum) {
  const sortedArray = array.sort((a, b) => {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }
  });

  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (sortedArray[left] + sortedArray[right] === targetSum) {
      return [sortedArray[left], sortedArray[right]];
    }

    if (sortedArray[left] + sortedArray[right] < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
