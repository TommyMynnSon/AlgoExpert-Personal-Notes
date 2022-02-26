function sortedSquaredArray(array) {
  const answer = array.map(number => 0);

  let startPointer = 0;
  let endPointer = array.length - 1;

  let currentAnswerIndex = array.length - 1;

  while (startPointer !== endPointer) {
    const startPointerValue = Math.abs(array[startPointer]);
    const endPointerValue = Math.abs(array[endPointer]);

    if (startPointerValue > endPointerValue) {
      answer[currentAnswerIndex] = Math.pow(startPointerValue, 2);
      startPointer++;
    } else {
      answer[currentAnswerIndex] = Math.pow(endPointerValue, 2);
      endPointer--;
    }

    currentAnswerIndex--;
  }

  answer[0] = Math.pow(array[startPointer], 2);

  return answer;
}