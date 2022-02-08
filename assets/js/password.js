
// declare variables
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
specialChar = ["!", "”", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", ";", ":", "/", "<", "=", ">", "?", "@", "^", "~"],
password = document.getElementById("password"),
lowerChoice = false,
upperChoice = false,
noLettersChoice = false,
numberChoice = false,
specialChoice = false;

// random letters
var getLetters = function() {
    var ranLetters = letters[Math.floor(Math.random() * letters.length)];
    return ranLetters;
}

// random numbers
var getNumbers = function() {
    var ranNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    return ranNumbers;
}

// random special characters
var getSpecialChar = function() {
    var ranSpecialChar = specialChar[Math.floor(Math.random() * specialChar.length)];
    return ranSpecialChar;
}

// create characters
var createChar = function() {
    var ranPrompts = Math.floor(Math.random() * 3) + 1; // 1 - 3

    // letters
    if (ranPrompts === 1 && !noLettersChoice) {

        // lowercase = true, uppercase = true
        if (lowerChoice === true && upperChoice === true) {
            var ranUpLow = Math.floor(Math.random() *2) +1; // 1 - 2
            if (ranUpLow === 1) {
                password.innerHTML += getLetters().toUpperCase();
            } else {
                password.innerHTML += getLetters();
            }
        }

        // lowercase = true, uppercase = false
        else if (lowerChoice === true && upperChoice === false) {
            password.innerHTML += getLetters();
        }

        // lowercase = false, uppercase = true
        else if (lowerChoice === false && upperChoice === true) {
            password.innerHTML += getLetters().toUpperCase();
        } else {
            return;
        }

    // numbers
    } else if (ranPrompts === 2 && numberChoice) {
        password.innerHTML += getNumbers();
    
    // special characters
    } else if (ranPrompts == 3 && specialChoice) {
        password.innerHTML += getSpecialChar();
    }
}

// click 'button' to randomize characters
function addPassword() {

    // clear previous passwords if any
    password.innerHTML = "";
    console.clear();

    // ask for lowercase letters
    var chooseLower = confirm("Include lowercase letters?");
    if (chooseLower) {
        lowerChoice = true;
    }
    console.log("Lowercase letters = " + lowerChoice);

    // ask for uppercase letters
    var chooseUpper = confirm("Include uppercase letters?");
    if (chooseUpper) {
        upperChoice = true;
    }
    console.log("Uppercase letters = " + upperChoice);

    // if both choices above are false
    if (!chooseLower && !chooseUpper) {
        var chooseLetters = confirm("Would you like to include letters?");
        if (!chooseLetters) {
            noLettersChoice = true;
            console.log("No Letters = " + noLettersChoice);
        }
    }

    // ask for numeric
    var chooseNumeric = confirm("Include numberic characters?");
    if (chooseNumeric) {
        numberChoice = true;
    } else {
        numberChoice = false;
    }
    console.log("Numeric characters = " + numberChoice);

    // ask for special characters
    var chooseSpecialChar = confirm("Include special characters?");
    if (chooseSpecialChar) {
        specialChoice = true;
    } else {
        specialChoice = false;
    }
    console.log("Special characters = " + specialChoice);

    var chooseCharacters = function() {
        var charNum = prompt("How many characters? 8 - 125");
        charNum = parseInt(charNum);
        if (charNum < 8 || charNum > 125) {
            alert("Please choose between 8 - 125!");
            chooseCharacters();
        } else {
            var numOfPrompts = charNum;
    
            while(numOfPrompts > 0) {
                createChar();
                numOfPrompts--;
            }
        }
    }
    chooseCharacters();
}
