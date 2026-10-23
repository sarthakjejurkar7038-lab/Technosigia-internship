// Variables: var, let, const
var city = "Pune";            // old style (avoid)
let age = 21;                 // can be changed
const name = "Aarav";         // cannot be changed
age = 22;

// Data types
let marks = 88;               // number
let passed = true;            // boolean
let nothing = null;           // null
console.log(typeof name, typeof marks, typeof passed, typeof nothing);

// Operators
console.log("Add:", 10 + 3, "| Mod:", 10 % 3, "| Power:", 2 ** 3);
console.log("Equal:", 5 == "5", "| Strict equal:", 5 === "5");
console.log("AND:", marks > 50 && passed);

// Conditional statements
if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else {
  console.log("Grade B");
}

// Loops
for (let i = 1; i <= 5; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

let n = 3;
while (n > 0) {
  console.log("Countdown:", n);
  n--;
}