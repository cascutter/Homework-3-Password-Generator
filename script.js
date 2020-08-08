// Assignment Code
var generateBtn = document.getElementById("generate");
var passwordText = document.getElementById("password");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
}

function generatePassword() {

  // Variables and arrays for password generator
var getLength;
var getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperArr = getUpper.split("");
var getLower = "abcdefghijklmnopqrstuvwxyz";
var lowerArr = getLower.split("");
var getNumber = "01234567890123456789";
var numberArr = getNumber.split("");
var getSymbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var symbolArr = getSymbol.split("");
var getChoices = [];
var charParameters = [];

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
    getChoices = getChoices.concat(upperArr);
  }
  
  //Prompt to add lowercase
  getLower = confirm("Click OK to include lowercase letters in your password.");
  //Confirm add lowercase input
  if (getLower === true) {
    charParameters = charParameters.concat("lowercase letters");
    console.log("lowercase letters");
    getChoices = getChoices.concat(lowerArr);
  } 

  //Prompt to add number
  getNumber = confirm("Click OK to include numbers in your password.");
  //Confirm add number input
  if (getNumber === true) {
    charParameters = charParameters.concat("numbers");
    console.log("numbers");
    getChoices = getChoices.concat(numberArr);
  }

  //Prompt to add symbol
  getSymbol = confirm("Click OK to include symbols in your password.");
  //Confirm add symbol input
  if (getSymbol === true) {
    charParameters = charParameters.concat("symbols");
    console.log("symbols");
    getChoices = getChoices.concat(symbolArr);
  }

  //Confirm character selections or alert that parameters haven't been met
  if (getUpper === false && getLower === false && getNumber === false && getSymbol === false) {
    alert("You must select at least one character parameter.");
    window.location.reload(false);
  } else {
    alert("Your password will contain " + charParameters + ".");
  }
 
  // Generate password into textarea
  var password = "";
    for (var i = 1; i <= getLength; i++) {
      var randomChar = getChoices[Math.floor(Math.random() * getChoices.length)];
      password = password + randomChar;
    }
    return password;
}