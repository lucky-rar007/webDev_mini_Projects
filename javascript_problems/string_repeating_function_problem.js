function repeatStringNumTimes(str, rep) {
  if (rep <= 0) return "";
  let show = "";
  for (let i = 0; i < rep; i++) {
    show += str;
  }
  return show;
}

let str="hello";
let rep=4;
console.log(repeatStringNumTimes(str,rep));