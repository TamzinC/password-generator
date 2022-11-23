// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

 // Steps needed from user:
  // Choose their password length, up to 64 characters
  // Ask if they'd like lowercase to be included
  // Ask if they'd like uppercase included
  // Ask if they'd like numbers included
  // Ask if they'd like special characters included
  // Make sure at least one character type is selected!

// // Function to prompt user for password options - decided to not use to function and instead keep majority of the code under one function to avoid complexity and repitition
// function getPasswordOptions() {
 
// }

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? (Must be between 10-64 characters)"));

  console.log(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 10) {
    alert("Password too short!");
    return;
  } 
  if (passwordLength > 64) {
    alert("Password too long!");
    return;
  }
  
  console.log("Good Length");
  
  var includeLowercase = confirm("Would you like to include lowercase letters? (Click 'OK' for Yes or 'Cancel' for No)");
  var includeUppercase = confirm("Would you like to include uppercase letter? (Click 'OK' for Yes or 'Cancel' for No)");
  var includeNumbers = confirm("Would you like to include any numbers? (Click 'OK' for Yes or 'Cancel' for No)");
  var includeSpecial = confirm("Would you like to include any special characters? (Click 'OK' for Yes or 'Cancel' for No)");

  var characterOptions = [];
  if (includeLowercase) {
    characterOptions = characterOptions.concat(lowerCasedCharacters);
  }
  if (includeUppercase) {
    characterOptions = characterOptions.concat(upperCasedCharacters);
  }
  if (includeNumbers) {
    characterOptions = characterOptions.concat(numericCharacters);
  }
  if(includeSpecial) {
    characterOptions - characterOptions.concat(specialCharacters);
  }

  if (characterOptions.length === 0) {
    alert("Failed to provide appropiate password options!");
    return "";
  }

  console.log(characterOptions);

  var password = ""

  for (var i = 0; i < passwordLength; i++) {
    password += getRandom(characterOptions);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);