// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCasLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetter = [];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","&","*","?"];
for (var i=0; i < lowerCasLetter.length; i++){
  capLetter[i] = lowerCasLetter[i].toUpperCase()
}
console.log(capLetter)
function getRandom(list) {
  return list[ranpoint(0, list.length -1)]
}

function ranpoint(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

function generatePassword(){
  var passworCreated = []
  var characters = window.prompt("How long would you like to make your password?")
 var characterAnswer = characters
 if (characterAnswer >= 129 || characterAnswer <= 7){
  window.alert("Choose password length between 8-128")
  return;
 }
  console.log(characterAnswer);

var number = window.confirm("Would you like to include Numbers?");
var capital = window.confirm("Would you like to include Capital Letters?");
var special = window.confirm("Would you like to include special characters?");
var lowerCaseLet = window.confirm("Would you like to include Lowercase Leters?");
if(number === true){
  passworCreated.push(numbers)
}
  if(lowerCaseLet === true){
  passworCreated.push(lowerCasLetter)
}
if(capital === true){
  passworCreated.push(capLetter)
}
if(special === true){
  passworCreated.push(specialCharacters)
}
if(lowerCaseLet && capital === true){
  passworCreated.push(lowerCasLetter,capLetter)
}

console.log(passworCreated);
var createdPasscode = "";
for (var i = 0;i < characterAnswer; i++){
  var randomspot = getRandom(passworCreated);
  var randomPass = getRandom(randomspot);
  console.log(randomPass);
  createdPasscode += randomPass
}
  return createdPasscode;
}
// Write password to the #password input
function writePassword() {

     var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

