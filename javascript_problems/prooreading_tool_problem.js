function isPalindrome(word) {
  let check = word.toString().toLowerCase();
  let rev = check.split("").reverse().join("");
  return check === rev;
}

function findPalindromeBreaks(words) {
  let ans = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      ans.push(i);
    }
  }

  return ans;
}

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];

  let result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");

    let count = 0;

    for (let j = 0; j <= words.length - phraseLength; j++) {
      let compare = words.slice(j, j + phraseLength).join(" ");
      if (compare === phrase) {
        count++;
      }
    }

    if (count > 1) {
      result.push(i);
    }
  }

  return result;
}


function analyzeTexts(texts, phraseLength) {
  if (texts.length === 0) return [];

  let result = [];

  for (let i = 0; i < texts.length; i++) {
    result.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }

  return result;
}
