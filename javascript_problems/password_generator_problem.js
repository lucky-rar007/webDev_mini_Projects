function generatePassword(passlen) {
  let chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < passlen; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}

let password = generatePassword(12);

console.log(`Generated password: ${password}`);