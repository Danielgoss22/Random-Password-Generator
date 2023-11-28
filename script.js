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
  var hasLowerCase = confirm("Do you want lowercase letters in your password?");
  var hasUpperCase = confirm("Do you want uppercase letters in your password?");
  var hasSpecialCharaters = confirm(
    "Do you want special characters in your password?"
  );
  var hasNumericCharacters = confirm("Do you want numbers in your password?");
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecialCharaters === false &&
    hasNumericCharacters === false
  ) {
    alert("Must choose at least one character type.");
    return null;
  }

  var userInput = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecialCharaters: hasSpecialCharaters,
    hasNumericCharacters: hasNumericCharacters,
  };
  return userInput;
}

function generatePassword() {
  var randPass = passwordOptions();

  var finalOutput = [];

  var possibleChars = [];

  var chosenChars = [];
  if (randPass.hasLowerCase) {
    possibleChars = possibleChars.concat(lowerCase);
    chosenChars.push(getRandom(lowerCase));
  }

  if (randPass.hasUpperCase) {
    possibleChars = possibleChars.concat(upperCase);
    chosenChars.push(getRandom(upperCase));
  }
  if (randPass.hasSpecialCharaters) {
    possibleChars = possibleChars.concat(specialCharacters);
    chosenChars.push(getRandom(specialCharacters));
  }
  if (randPass.hasNumericCharacters) {
    possibleChars = possibleChars.concat(numericCharacters);
    chosenChars.push(getRandom(numericCharacters));
  }
  var numberOfRand = randPass.length - chosenChars.length;

  for (let index = 1; index < numberOfRand; index++) {
    var randomChar = getRandom(possibleChars);
    finalOutput.push(randomChar);
  }
  finalOutput = finalOutput.concat(chosenChars);

  finalOutput.push(numberOfRand);
  return finalOutput.join("");
}
function getRandom(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomElement = arr[index];
  return randomElement;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
