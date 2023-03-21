function repeatedWord(str) {
    const words = str.split(/[\W\s]+/);
    const wordMap = new Map();
  
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (wordMap.has(lowerCaseWord)) {
        return lowerCaseWord;
      }
      wordMap.set(lowerCaseWord, 1);
    }
  return null
}

module.exports = repeatedWord