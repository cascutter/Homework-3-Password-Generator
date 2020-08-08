# Homework 3: Password Generator

Homework 3: Password Generatorn is an application that generates a random password based on user-selected criteria. It runs in the browser and features dynamic HTML and CSS powered by JavaScript code. 

## Motivation

This project was created to show an understanding of basic JavaScript knowledge to create a functioning, browswer-based application. It combines knowledge of HTML, CSS, Bootstrap, and JavaScript.

### Example of JavaScript

```
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
  ```


## Features

<img src = "Assets/Password Generator.gif">

* When the 'Generate Password' button is clicked, user is presented with a series of prompts.

* User is prompted to input password length, between 8 and 128 characters.

* User is asked to select at least one character type parameter of uppercase letters, lowercase letters, numbers, and/or symbols.

* When all prompts are answered and input is validated, a random password meeting the parameters set by user is generated.

* Password is written to the page upon generation.

## Author
* JavaScript: Casandra Cutter
* HTML and CSS by UTSA Full Stack Bootcamp / Trilogy Edu
* H/t Traversy Media JavaScript Password Generator YouTube video; TechnicalCafe Random Password Generator Tutorial YouTube video; GitHub; MDN web docs; Celine Ross






