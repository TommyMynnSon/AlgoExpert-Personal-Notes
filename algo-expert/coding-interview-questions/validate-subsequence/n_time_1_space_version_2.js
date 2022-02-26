function isValidSubsequence(array, sequence) {
  let sequenceIdx = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequenceIdx === sequence.length) {
      return true;
    }

    if (array[i] === sequence[sequenceIdx]) {
      sequenceIdx++;
    }
  }

  if (sequenceIdx === sequence.length) {
    return true;
  }

  return false;
}
