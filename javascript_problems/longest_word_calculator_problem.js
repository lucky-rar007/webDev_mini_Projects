function findLongestWordLength(sentence) {
  let maxLen = 0;
  const words = sentence.trim().split(/\s+/).filter(word => word.length > 0); 
  for (const word of words) {
    if (word.length > maxLen) {
      maxLen = word.length;
    }
  }
  return maxLen;
}