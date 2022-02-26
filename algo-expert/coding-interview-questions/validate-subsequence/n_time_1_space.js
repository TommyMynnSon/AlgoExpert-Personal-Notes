function isValidSubsequence(array, sequence) {
  let arrayIdx = 0;
  let sequenceIdx = 0;

  while (arrayIdx !== array.length && sequenceIdx !== sequence.length) {
    if (array[arrayIdx] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }

    arrayIdx++;
  }

  if (sequenceIdx === sequence.length) {
    return true;
  }

  return false;
}
