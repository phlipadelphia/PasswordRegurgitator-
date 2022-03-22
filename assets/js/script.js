// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let charBank = "";
  //password criteria
  let passwordLength = parseInt(prompt("Please enter number of characters from 8-128 ? "));
  console.log(passwordLength);
  let password = "";


  //THEN I choose a length of at least 8 characters and no more than 128 characters
  //&& -and || - either or 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please re-enter new passowrd length");
    passwordLength = parseInt(prompt("Please enter number of characters from 8-128 ? "));
    console.log("Updated ", passwordLength);
  }

  // character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  let confirmLowerCase = confirm("Would you like to unclude lower case letters ?");
  console.log(confirmLowerCase);
  if (confirmLowerCase === true) {
    charBank = charBank + "abcdefghijklmnopqrstuvwxyz";
  }

  let confirmUpperCase = confirm("Would you like to include upper case letters?");
  console.log(confirmUpperCase);
  if (confirmUpperCase === true) {
    charBank = charBank + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  let confirmNumeric = confirm("Would you like to include numbers?");
  console.log(confirmNumeric);

  if (confirmNumeric === true) {
    console.log(passwordLength);
    charBank = charBank + "1234567890";
  }

  let confirmSpecialChar = confirm("Would you like to include special characters?");
  console.log(confirmSpecialChar);

  if (confirmSpecialChar === true) {
    console.log(passwordLength);
    charBank = charBank + "!@#$%^&";
  }

  console.log("based on all answers my charbank list is created ", charBank);

  //Generate random letters based on the carBank and the passowrd length 
  for(let i =0 ; i< passwordLength; i++){
    //generate a random letter from the charbank 
    let randomCharacter = charBank[Math.floor(Math.random() * charBank.length)]
    console.log(randomCharacter);
    //add to the password 
    password = password + randomCharacter;
  }

  return password; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
