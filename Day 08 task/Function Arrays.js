// Functions for basic calculations
function add(a, b) {
  return a + b;
}

const multiply = (a, b) => a * b;      // arrow function

function average(nums) {
  let total = 0;
  for (const n of nums) total += n;
  return total / nums.length;
}

console.log("Add:", add(5, 3));
console.log("Multiply:", multiply(4, 6));

// Array operations
const marks = [88, 93, 55, 71];
marks.push(80);                         // add at end
marks.pop();                            // remove from end
console.log("Array:", marks, "| Length:", marks.length);
console.log("Average:", average(marks));
console.log("Passed:", marks.filter(m => m >= 60));
console.log("Doubled:", marks.map(m => m * 2));
console.log("Sorted:", [...marks].sort((a, b) => b - a));

// Objects: create and access properties
const student = {
  id: 1,
  name: "Aarav",
  marks: 88,
  greet() {
    return "Hi, I am " + this.name;
  },
};

console.log(student.name, student["marks"]);   // dot and bracket access
student.city = "Pune";                          // add property
student.marks = 95;                             // update property
delete student.id;                              // delete property
console.log(student);
console.log(student.greet());