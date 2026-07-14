function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  return str.replace(/^([^aeiou]+)(.*)/, (match, group1, group2) => {
    return group2 + group1 + "ay";
  });
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("paragraphs")); // aragraphspay
console.log(translatePigLatin("glove"));      // oveglay
console.log(translatePigLatin("algorithm"));  // algorithmway
console.log(translatePigLatin("eight"));      // eightway
console.log(translatePigLatin("schwartz"));   // artzschway
console.log(translatePigLatin("rhythm"));     // rhythmay