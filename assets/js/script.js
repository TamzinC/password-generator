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

// Combining all arrays into one big array:
var charactersArray = {specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters}

// // testing to see if the above worked!
// console.log(charactersArray);
// console.log(charactersArray.specialCharacters);



// Function to prompt user for password options
function getPasswordOptions() {
  // Steps needed from user:
  // Choose their password length, up to 64 characters
  // Ask if they'd like lowercase to be included
  // Ask if they'd like uppercase included
  // Ask if they'd like numbers included
  // Ask if they'd like special characters included
  // Make sure at least one character type is selected!


  // var passLength = 64;
  // var randomPass = charactersArray[Math.floor(Math.random() * passLength.length)];
  // var userInput = prompt('Choose your password length (10 - 64)');
  
  
  // for (var count = 1; count <= passLength; count++) {
  //   console.log(count);
  // }


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password to be? (Must be between 10-64 characters)"));

  console.log(passwordLength);

  if (isNan(passwordLength) || passwordLength < 10) {
    alert("Password too short!");
  } else if (passwordLength > 64) {
    alert("Password too long!");
    return;
  }
  
  console.log("Good Length");
  
  
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