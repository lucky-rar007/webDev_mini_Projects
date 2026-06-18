function sumAll([n,m]){
  let small=Math.min(n,m);
  let result=0;
  for(let i=0;i<=(Math.abs(n-m));i++){
    result+=small;
    small++;
  }
  return result;
}
console.log(sumAll([4,0]));