function frankenSplice(arr1, arr2, index) {
  let result = arr2.slice(); // copy arr2

  result.splice(index, 0, ...arr1);

  return result;
}