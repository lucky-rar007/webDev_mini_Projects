let num = 5; 

function factorialCalculator(num){
  let fact = 1;
  while(num > 0){
    fact = fact * num;
    num--;
  }
  return fact;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);