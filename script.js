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

// Prompt for length (minimum 8, maximum 128)
var chooseLength = prompt("Choose your password length. \nEnter a number between 8 and 128 to indicate your desired password length.");
if (chooseLength >= 8 && chooseLength <= 128) {
  var chooseChar = [
    "Would you like your password to include uppercase letters?",
    "Would you like your password to include lowercase letters?",
    "Would you like your password to include numbers?",
    "Would you like your password to include special characters?"
  ];
    for (var i = 0; i < chooseChar.length; i++) {
    confirm(chooseChar[i]);
    console.log(chooseChar[i])
  }
} else {
  alert = "Please enter a number between 8 and 128."
}
// Prompt for included characters (lower, upper, number, symbol)

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