function pyramid(char, rows, inverted) {
  let result = "\n";

  if (!inverted) {
    for (let i = 0; i < rows; i++) {
      result +=
        " ".repeat(rows - i - 1) +
        char.repeat(2 * i + 1) +
        "\n";
    }
  } else {
    for (let i = 0; i < rows; i++) {
      result +=
        " ".repeat(i) +
        char.repeat(2 * (rows - i) - 1) +
        "\n";
    }
  }

  return result;
}