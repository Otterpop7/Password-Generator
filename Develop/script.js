// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//set random variables to false
var randomLower = false;
var randomUpper = false;
var randomSymbol = false;
var randomNumber = false;

// Write password to the #password input
function writePassword() {
    var length = getLength(); //length of password
    var lower = getLower(); //lowercase letters
    var upper = getUpper(); //uppercase letters
    var symbol = getSpecialCharacter(); //special characters/symbols
    var number = getNumber(); //integers

    var password = "";
    if (!lower && !upper && !symbol && !number) { //checks if they select nothing
        var password = 'No options selected try again.'
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    } else { //if something is selected this code runs
        var getFunctions = createArray(lower, upper, symbol, number);


        for (var i = 0; i < length; i++) { //Make the Password
            password = password + getCharacters(getFunctions)
        }
        var passwordText = document.querySelector('#password');
        passwordText.value = password;
    }
}

//length of password
function getLength() {
    var passwordLength = prompt('How many characters would you like your password to be?  Select a number between 8 and 128.');
    if (passwordLength >= 8 && passwordLength <= 128) {
        return passwordLength;
    } else {
        alert('Please enter a valid response 8-128.');
        return getLength();
    }
}
//prompt for lowercase
function getLower() {
    var lowerCase = confirm('Would you like to include Lower Case characters. Click Ok for "YES" and Cancel for "NO".');
    return lowerCase;
}
//prompt for uppercase
function getUpper() {
    var upperCase = confirm('Would you like to include Upper Case characters. Click Ok for "YES" and Cancel for "NO".');
    return upperCase;
}
//prompt for symbols
function getSpecialCharacter() {
    var specialCharacters = confirm('Would you like to include Symbol/Special characters. Click Ok for "YES" and Cancel for "NO".');
    return specialCharacters;
}
//prompt for numbers
function getNumber() {
    var integers = confirm('Would you like to include Number characters. Click Ok for "YES" and Cancel for "NO".');
    return integers;
}

//create array for users "YES" answers
function createArray(lower, upper, symbol, number) {
    const characterCount = lower + upper + symbol + number;
    var getFunctions = new Array(characterCount);

    var isLower, isUpper, isSymbol, isNumber = false;

    for (var i = 0; i < characterCount; i++) {
        if (lower && !isLower) {
            getFunctions[i] = getRandomLower;
            isLower = true;
        } else if (upper && !isUpper) {
            getFunctions[i] = getRandomUpper;
            isUpper = true;
        } else if (symbol && !isSymbol) {
            getFunctions[i] = getRandomSymbol;
            isSymbol = true;
        } else if (number && !isNumber) {
            getFunctions[i] = getRandomNumber;
            isNumber = true;
        }
    }
    return getFunctions;
}

//Randomize above array
function getCharacters(getFunctions) {
    var result = getFunctions[Math.floor(Math.random() * getFunctions.length)]();
    return result;
}

//random lowercase letter generator
function getRandomLower() {
    randomLower = true;
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//random uppercase letter generator
function getRandomUpper() {
    randomUpper = true;
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//random number generator
function getRandomNumber() {
    randomNumber = true;
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//random symbol generator
function getRandomSymbol() {
    randomSymbol = true;
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}