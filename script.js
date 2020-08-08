// Get elements from html
var generateButton = document.getElementById("generate");
var passwordDisplay = document.getElementById("password");

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

// Generate password
function writePassword() {
    
    // Variables and arrays for password generator
    var getLength;
    var getUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //var upperArr = getUpper.split("");
    var getLower = "abcdefghijklmnopqrstuvwxyz";
    //var lowerArr = getLower.split("");
    var getNumber = "01234567890";
    //var numberArr = getNumber.split("");
    var getSymbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    //var symbolArr = getSymbol.split("");
    var choices = "";
    var charParameters = []

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
        choices += getUpper;
        password += getRandomChar(getUpper);
    }
    //Prompt to add lowercase
    getLower = confirm("Click OK to include lowercase letters in your password.");
    //Confirm add lowercase input
    if (getLower === true) {
        charParameters = charParameters.concat("lowercase letters");
        console.log("lowercase letters");
        choices += getUpper;
        password += getRandomChar(getLower);
    } 
    //Prompt to add number
    getNumber = confirm("Click OK to include numbers in your password.");
    //Confirm add number input
    if (getNumber === true) {
        charParameters = charParameters.concat("numbers");
        console.log("numbers");
        choices += getNumber;
        password += getRandomChar(getNumber);
    }
    //Prompt to add symbol
    getSymbol = confirm("Click OK to include symbols in your password.");
    //Confirm add symbol input
    if (getSymbol === true) {
        charParameters = charParameters.concat("symbols");
        console.log("symbols");
        choices += getSymbol;
        password += getRandomChar(getSymbol);
    }
    //Confirm character selections or alert that parameters haven't been met
    if (getUpper === false && getLower === false && getNumber === false && getSymbol === false) {
        alert("You must select at least one character parameter.");
    } else {
    alert("Your password will contain " + charParameters + ".");
    }

    //establish password length entered in relation to characters used, see helper function
    //for (var i = password.length; i < getLength; i++) {
       // password += getRandomChar(options)
    //}
    //display password
   // passwordDisplay.textContent = password
   var password = "";
    for (var i = 1; i <= getLength; i++) {
        var randomChar = choices [Math.floor(Math.random() * choices.length)];
      password = getRandomChar(password + randomChar);
    }
    return password;
}
//helper function for how to get a random character from each string
function getRandomChar(string) {
    return string[Math.floor(Math.random() * string.length)]
}