function caseCheckHelper(word) {
  return word[0] === word[0].toUpperCase();
}

function myReplace(str, toChange, changeWith) {
  let word = "";

  if (caseCheckHelper(toChange)) {
    word = changeWith[0].toUpperCase() + changeWith.slice(1);
  } else {
    word = changeWith.toLowerCase();
  }

  return str.replace(toChange, word);
}