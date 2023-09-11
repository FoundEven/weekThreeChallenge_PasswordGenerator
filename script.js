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



// add prompts about
//character length(8 to 128)
//whether to include lowercase, uppercase, numeric, and/or special characters

function generatePassword () {
  var wordLength = prompt("Input how long you want your password to be(It must be between 8 and 128)."); //asks user how long they want their password.
  var wordLower = false;
  var wordUpper = false;
  var number = false;
  var specialWord = false;
  var password = "";
  
//This checks whether the user has put in a valid number.
  while (wordLength == null) {
    wordLength = prompt("Please enter a number between 8 and 128.");
  }
  while (wordLength < 8 || wordLength > 128) {
    wordLength = prompt("Please enter a number between 8 and 128.");
  }

  //These ask the user if they want to include lowercase, uppercase, numeric, and/or special characters and makes sure at least one of them is true.
  while (wordLower == false && wordUpper == false && number == false && specialWord == false){
    wordLower = confirm("Would you like lowercase letters in your password?");
    wordUpper = confirm("Would you like uppercase letters in your password?");
    number = confirm("Would you like numbers in your password?");
    specialWord = confirm("Would you like special characters in your password?");
  }

  if (wordLower == true){     // calls function if the user wants lowercase letters in password
    lowercaseWord();
  }
  if (wordUpper == true){     // calls function if the user wants uppercase letters in password
    uppercaseWord();
  }
  if (number == true){     // calls function if the user wants numbers in password
    replaceNum();
  }
  if (specialWord == true){     // calls function if the user wants special characters in password
    replaceSpecial();
  }

        //This function replaces characters of password with lowercase letters or creates a string of lowercase letters at random.
  function lowercaseWord(){
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var randomPos = 0;
    for (var i = 0; i < wordLength; i++){
      var randomPos = randomNum(0,25);
      password = password + letters[randomPos];
    }
  }
        //This function replaces characters of password with uppercase letters or creates a string of uppercase letters at random.
  function uppercaseWord(){
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var randomPos = 0;
    var reduceInst = wordLength / 2;
    if (wordLower == false){
      for (var i = 0; i < wordLength; i++){
        var randomPos = randomNum(0,25);
        password = password + letters[randomPos];
      }
    } else {
      for (var i = 0; i < reduceInst; i++){
        var randomPos = randomNum(0,25);
        var randomPos2 = randomNum(0,wordLength);
        password = password.replace( password[randomPos2], letters[randomPos]);
      }
    }
  }
        //This function replaces characters of password with numbers or creates a string of numbers at random.
  function replaceNum(){
    var randomPos = 0;
    var reduceInst = wordLength / 3;
    if (wordLower == false && wordUpper == false){
      for (var i = 0; i < wordLength; i++){
        var randomPos = randomNum(0,9);
        password = password + randomPos;
      }
    } else {
      for (var i = 0; i < reduceInst; i++){
        var randomPos = randomNum(0,9);
        var randomPos2 = randomNum(0,wordLength);
        password = password.replace( password[randomPos2], randomPos);
      }
    }
  }
        //This function replaces characters of password with special characters or creates a string of special characters at random.
  function replaceSpecial(){
    var specialList = " !#$%&'\"()*+,-./:;<=>?@[\\]^_`{|}~";
    var randomPos = 0;
    var reduceInst = wordLength / 4;
    if (wordLower == false && wordUpper == false && number == false){
      for (var i = 0; i < wordLength; i++){
        var randomPos = randomNum(0,32);
        password = password + specialList[randomPos];
      }
    } else {
      for (var i = 0; i < reduceInst; i++){
        var randomPos = randomNum(0,32);
        var randomPos2 = randomNum(0,wordLength);
        password = password.replace( password[randomPos2], specialList[randomPos]);
      }
    }
  }
        //This is a function for a random number generator that generates a random number when called on that is limited by what is set in the call.
  function randomNum(x,y){
    min = Math.ceil(x);
    max = Math.floor(y);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return password;
}
// Include a function that generates a random number for each character that we want to replace in the password string
// include functions for each confirmation section that will only run if the variable returns true.
// Include two sections to each confirmation function, one that will only activate if the previse funtion returned false, this section will create the password
// the second section will ammend the password with whatever the confirmation asked for using the random number generator to pick the place to ammend in the string.
// use the wordLength to get how many times the loop will go for for each confirmation section to determine how many characters get replaced.
