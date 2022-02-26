function sortedSquaredArray(array) {
  return array.map(integer => integer * integer).sort((a, b) => {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });
}