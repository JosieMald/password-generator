
// <-- Variables -->
var alpha = ["a",
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
"z"];
var generateBtn = document.querySelector("button");
var character = ["!", "@", "#", "$", "%", "^", "&", "*"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var answers = [];
var lowCaseArray = [];
var length;
var passwordContainer = [];

// <-- Start of code alert -->

generateBtn.addEventListener ("click", function () {
    answers = [];
    passwordContainer = [];
    alert("Let's create a customizable password!");
    characterLength();
});

// <-- Choose how many characters you'd like -->

function characterLength() {
    length = prompt("Choose a length of characters between 8 and 129.");
    console.log(length);
    if (length < 8 || length > 129 ){
        alert("Please choose a number between 8 and 129");
        characterLength();
    } else {
        start();
    }
};
// <-- Alert to begin using characters  -->

function start() {
    alert("Here we'll decide what kinda of character types you'd like for your password.");
    lowerCase();
};

// <-- Lowercase letters prompt -->
// -- When true for loop will add lowercase letters to array --

function lowerCase() {
    var lowCase = confirm("Would you like to use lowercase letters?");
    console.log(lowCase);
    if (lowCase === false) {
        upperCase();
    } else {
        for (var i = 0; i < length; i++) {
            answers.push(alpha[Math.floor(Math.random() * 26)]);
        }
        console.log(answers);
        upperCase();
    }
};

// <-- Uppercase letters prompt -->
// -- When true for loop will add uppercase letters to array --

function upperCase() {
    var upCase = confirm("Would you like to use Uppercase letters?");
    console.log(upCase);
    if (upCase === false) {
        numerical();
    } else {
        for (var i = 0; i < length; i++) {
            answers.push(alpha[Math.floor(Math.random() * 26)].toUpperCase());
        }
        console.log(answers);
        numerical();
    }
};

// <-- Numerical characters prompt -->
// -- When true for loop will add numbers to array --

function numerical() {
    var numbers = confirm("Would you like to use numerical numbers?");
    console.log(numbers);
    if (numbers === false) {
        specialcharacters();
    } else {
        for (var i = 0; i < length; i++) {
            answers.push(number[Math.floor(Math.random() * 10)]);
        }
        console.log(answers);
        specialcharacters();
    }
};

// <-- Special characters prompt -->
// -- When true for loop will add special characters to array --

function specialcharacters() {
    var specialChar = confirm("Would you like to use special characters? \n Example: ! @ # $ % ^ & * ");
    console.log(specialChar);
    if (specialChar === false){
        complete();
    } else {
        for (var i = 0; i < length; i++) {
            answers.push(character[Math.floor(Math.random() * 8)]);
        }
        console.log(answers);
        complete();
    }
};
// <-- Displays password generator -->

function complete() {
    for (var i = 0; i < length; i++) {
        passwordContainer.push(answers[Math.floor(Math.random() * answers.length)]);
    }
    var password = document.querySelector("textarea")
    password.innerHTML = passwordContainer.join("");
}
