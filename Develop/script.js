// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var length = getLength(); //length of password
    var lower = getLower(); //lowercase letters
    var upper = getUpper(); //uppercase letters
    var symbol = getSpecialCharacter(); //special characters/symbols
    var number = getNumber(); //integers

    var password = "";
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

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

function getLower() {
    var lowerCase = confirm('Would you like to include Lower Case characters. Click Ok for "YES" and Cancel for "NO".');
    return lowerCase;
}

function getUpper() {
    var upperCase = confirm('Would you like to include Upper Case characters. Click Ok for "YES" and Cancel for "NO".');
    return upperCase;
}

function getSpecialCharacter() {
    var specialCharacters = confirm('Would you like to include Symbol/Special characters. Click Ok for "YES" and Cancel for "NO".');
    return specialCharacters;
}

function getNumber() {
    var integers = confirm('Would you like to include Number characters. Click Ok for "YES" and Cancel for "NO".');
    return integers;
}