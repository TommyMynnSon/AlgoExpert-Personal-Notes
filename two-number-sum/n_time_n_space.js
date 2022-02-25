function twoNumberSum(array, targetSum) {
  const visitedValues = {};

  for (let i = 0; i < array.length; i++) {
    if (visitedValues[`${targetSum - array[i]}`]) {
      return [targetSum - array[i], array[i]];
    } else {
      visitedValues[`${array[i]}`] = true;
    }
  }

  return [];
}
