function steamrollArray(arr) {
  let result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      for (let element of item) {
        flatten(element);
      }
    } else {
      result.push(item);
    }
  }

  flatten(arr);

  return result;
}