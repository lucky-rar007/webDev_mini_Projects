function titleCase(str) {
  let res = str.toLowerCase().split(" ");

  for (let i = 0; i < res.length; i++) {
    let chars = res[i].split("");
    chars[0] = chars[0].toUpperCase();
    res[i] = chars.join("");
  }

  return res.join(" ");
}

console.log(titleCase("I like to code"));