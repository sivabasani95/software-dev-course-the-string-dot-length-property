/*

Objective:
Practice using the .length property by calculating the length of
multiple predefined strings and assigning the results to specific variables.

Instructions:
You will be provided with several predefined string variables.
Your task is to:
  - Use the .length property to calculate the length of each string.
  - Assign the length of each string to its corresponding length variable.
  - Ensure that each length variable contains the correct value.

*/

// Starter Code (Pre-filled):
// Predefined strings
let stringOne = "Coding Bootcamp";
let stringTwo = "JavaScript";
let stringThree = "";

// Your task: Assign the length of each string to the corresponding variable
let lengthOne;   // Length of stringOne
let lengthTwo;   // Length of stringTwo
let lengthThree; // Length of stringThree

// Your code here

// Basic string length
let message = "Hello, World!";
let messageLength = message.length;
console.log(messageLength); // Output: 13

// Using length with user input
let userInput = prompt("Enter your name:");
let inputLength = userInput.length;
alert("Your name has " + inputLength + " characters.");

// Checking if a string is empty
let str = "";
if (str.length === 0) {
  console.log("The string is empty.");
}

// Comparing lengths of multiple strings
let a = "short";
let b = "much longer string";
if (a.length < b.length) {
  console.log("String 'a' is shorter than string 'b'.");
}



