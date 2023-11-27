// Assignment code here

// Get references to the #generate element
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "~",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var generateBtn = document.querySelector("#generate");

function passwordOptions() {
  var length = parseInt(
    prompt("How many characters do you want your password to be?")
  );
  if (length < 8 || length > 128) {
    alert("Number of charaters must be between 8 and 128.");
    return null;
  }
  if (Number.isNaN(length)) {
    alert("The selection must be a number between 8 and 128.");
    return null;
  }
  var isLowerCase = confirm("Do you want lowercase letters in your password?");
  var isUpperCase = confirm("Do you want uppercase letters in your password?");
  var isSpecialCharaters = confirm(
    "Do you want special characters in your password?"
  );
  var isNumericCharacters = confirm("Do you want numbers in your password?");
  if (
    isLowerCase === false &&
    isUpperCase === false &&
    isSpecialCharaters === false &&
    isNumericCharacters === false
  ) {
    alert("Must choose one character type.");
    return null;
  }

  var userInput = {
    length: length,
    isLowerCase: isLowerCase,
    isUpperCase: isUpperCase,
    isSpecialCharaters: isSpecialCharaters,
    isNumericCharacters: isNumericCharacters,
  };
  return userInput;
}
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomElement = arr[index];
  return randomElement;
}
function generatePassword() {
  var custInfo = passwordOptions();
  //empty array = garuntee array, var garuntee need another array called possibilities take these and randomize against a random function then join into a final array then turn that array into a string declare 3 empty arrays
  //take custinfo with conditions to make sure it is true
  if (custInfo.isLowerCase) {
    possibilities = possibilities.concat(lowerCase);
    garuantee.push(getRandom(lowerCase));
  }
  if (custInfo.isLowerCase) {
    possibilities = possibilities.concat(lowerCase);
    garuantee.push(getRandom(lowerCase));
  }
  if (custInfo.isLowerCase) {
    possibilities = possibilities.concat(lowerCase);
    garuantee.push(getRandom(lowerCase));
  }
  if (custInfo.isLowerCase) {
    possibilities = possibilities.concat(lowerCase);
    garuantee.push(getRandom(lowerCase));
  }

  //randomize my garuantee
  for (let i = 0; i < garuantee.length; i++) {
    result[i] = garuantee[i];
  }
  for (let i = 0; i < custInfo.length; i++) {
    var possible = getRandom[possibilities];
    result.push(possible);
  }
}
//
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define and array of all lower case letter etc
