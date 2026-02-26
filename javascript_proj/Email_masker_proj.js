function maskEmail(email){
  let pos=email.indexOf("@");
  return email[0]+"*".repeat(pos-2)+email.slice(pos-1);
}

console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));
