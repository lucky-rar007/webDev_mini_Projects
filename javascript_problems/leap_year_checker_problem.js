let year = 2000;

function isLeapYear(y) {
  if (
    (y % 4 === 0 && y % 100 !== 0) ||
    (y % 400 === 0)
  ) {
    return `${y} is a leap year.`;
  } else {
    return `${y} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);