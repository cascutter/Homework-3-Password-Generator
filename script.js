// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Control password length
// document.getElementById("length").innerHTML = "Length: 25";

// Functions for generator

// Generate random uppercase letter
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} 
// Generate random lowercase letter
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Generate random number
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// Generate random symbol
function randomSymbol() {
  const symbol = "!#$%&'()*+,-./:;<=>?@[]{|}~";
  return symbol[Math.floor(Math.random() * symbol.length)];
  }

// Test
console.log (randomUpper());