// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character choice strings
//const randomUpper = "";
//const randomLower = "";
//const randomNumber = "";
//const randomSymbol = "";

var getLength;
var getUpper;
var getLower;
var getNumber;
var getSymbol;
var charParameters = [];

function generatePassword() {

  // Prompt for password length
  var getLength = (prompt("How many characters would you like your password to be? \nEnter a number between 8 and 128 to indicate your desired password length."));

  // Confirm length input
  if (getLength >= 8 && getLength <= 128) {
  alert("Your password will have " + getLength + " characters.");
  console.log(getLength);
  } else {
    alert("Please select a number between 8 and 128.");
    return;
  }

  //Prompt to add uppercase
  getUpper = confirm("Click OK to include uppercase letters in your password.");
  //Confirm add uppercase input
  if (getUpper === true) {
    charParameters = charParameters.concat("uppercase letters");
    console.log("uppercase letters");
  } else {
    console.log("");
  }

  //Prompt to add lowercase
  getLower = confirm("Click OK to include lowercase letters in your password.");
  //Confirm add lowercase input
  if (getLower === true) {
    console.log("lowercase letters");
  } else {
    console.log("");
  }

  //Prompt to add number
  getNumber = confirm("Click OK to include numbers in your password.");
  //Confirm add number input
  if (getNumber === true) {
    console.log("numbers");
  } else {
    console.log("");
  }

  //Prompt to add symbol
  getSymbol = confirm("Click OK to include symbols in your password.");
  //Confirm add symbol input
  if (getSymbol === true) {
    console.log("symbols");
  } else {
    console.log("");
  }

  //Confirm character selections or alert that parameters haven't been met
  if (getUpper === false && getLower === false && getNumber === false && getSymbol === false) {
    alert("You must select at least one character parameter.");
  } else {
    alert("Your password will contain " + charParameters + ".");
  }
  buildPassword(getUpper, getLower, getNumber, getSymbol);
  return "Password";
} 

function buildPassword(getUpper, getLower, getNumber, getSymbol) {
  console.log(getUpper, getLower, getNumber, getSymbol);
  return "Password";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}