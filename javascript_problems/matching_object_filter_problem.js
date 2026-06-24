function whatIsInAName(arr, src) {
  const keys = Object.keys(src);
  return arr.filter(obj =>
    keys.every(key => obj[key] === src[key])
  );
}