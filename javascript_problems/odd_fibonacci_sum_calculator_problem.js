function sumFibs(num) {
  let a = 0, b = 1, result = 0;

  while (b <= num) {
    if (b % 2 !== 0) result += b;
    [a, b] = [b, a + b];
  }

  return result;
}