/*
Gavin Sands
Feb 13, 2026
Activity 6: Variables
*/

console.log("---- I am in V A R I A B L E S ----");

// Q1: Is it permitted the next?
console.log("Q1 ---------------");
var var1 = "Iowa";
console.log(var1);

var var1 = 124;
console.log(var1);

// Is it Permitted ?
console.log("Yes");

// Q2: Is it valid?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
var2 = 124;

// Is it valid?
console.log("Valid?: Yes");

// Q3: Is it valid?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3= 2023;
console.log(var3);

console.log("Valid?: Yes");

// Q4: Explain the Error.
console.log("Q4 - TODO");
let var4;
const var5;
console.log("What is the error: Uncaught SyntaxError: Missing initializer in const declaration. Why? It must also be initialized with a value");

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
var6 = 2.8;
console.log("What's the error: Uncaught TypeError: Assignment to constant variable. It is not allowed to change a constant variable.")

// Q6 : Explain the Error.
console.log("Q6 ----------------");
let first_name = "Sarfaraz";
console.log("The error is caused by the spaces present in the variable name. If it contained a '_' between the two words instead of a space, it would be valid."); 
let 2numbers = [1,2];
console.log("It it not allowed to start a variable name with a number. If it was at the end, it would be valid.");
let city-state = "Ames Iowa";
console.log("In variable naming, it is not allowed to contain a'-'. Instead, it is valid to use a '_'.");

// Q7 : What !! ??
console.log("Q7 ----------------");
let mainCity = "DesMoines";
console.log("This is the Capital :", MainCity)
console.log("Uncaught ReferenceError: MainCity is not defined.There is a reference error due to the incorrect capitalization in the reference. The value of m and M are not the same when interpretted by a computer.")

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
var var7 = 100;
}
console.log(var7);
if (5 === 5) {
let var8  = 100;
}
console.log(var8);
console.log("Error: Uncaught ReferenceError: var8 is not defined. The declaration of var8 is not in the scope of reference. This means that it only exists within the {}. ")


