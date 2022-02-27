function longestSubstringWithoutDuplication(string) {
  // Object to map last seen index positions
  // of each character
  const lastSeen = {};

  // Index to start building substrings from
  // to avoid any previous duplicate characters
  let startIndex = 0;

  // Array of two integers representing start (inclusive)
  // and end (exclusive) indexes of the longest built
  // substring without duplication
  const identifyingRangeOfAnswer = [startIndex, 1];

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i];

    if (lastSeen[currentCharacter] !== undefined) {
      startIndex = Math.max(startIndex, lastSeen[currentCharacter] + 1)
    }

    const currentRange = identifyingRangeOfAnswer[1] - identifyingRangeOfAnswer[0];
    const newRange = (i + 1) - startIndex;

    if (newRange > currentRange) {
      identifyingRangeOfAnswer[0] = startIndex;
      identifyingRangeOfAnswer[1] = i + 1;
    }

    lastSeen[currentCharacter] = i;
  }

  return string.substring(identifyingRangeOfAnswer[0], identifyingRangeOfAnswer[1]);
}