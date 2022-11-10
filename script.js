// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var capLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var specialCharacters = ["!","@","#","$","%","&","*","?"];
var passworCreated = []
function getRandom(list) {
  return list[ranpoint(0, list.length -1)]
}

function ranpoint(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

function generatePassword(){
  var characters = window.prompt("how many characters")
 var characterAnswer = characters
  console.log(characterAnswer);

var number = window.confirm("include numbers?");
var capital = window.confirm("do you want to include capital letters?");
var special = window.confirm("include special characters?");
var lowerCaseLet = window.confirm("do you want lower case?");
if(number === true){
  passworCreated.push(numbers)
}
  
if(capital === true){
  passworCreated.push(capLetter)
}

if(special === true){
  passworCreated.push(specialCharacters)
}
if(lowerCaseLet === true){
  passworCreated.push(lowerCase)
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

