function spinalCase(str) {
  let regex = /[\s_]+/g;
  let regex1 = /([a-z])([A-Z])/g;

  let cleaned = str.replace(regex, "-");

  let final = cleaned.replace(regex1, (match, group1, group2) => {
    return group1 + "-" + group2.toLowerCase();
  });

  return final.toLowerCase();
}

console.log(spinalCase("ThisIs is a great statement"));