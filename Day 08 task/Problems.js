// 1. Even or odd
function evenOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

// 2. Factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

// 3. Prime number check
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 4. Reverse a string and palindrome check
function reverse(text) {
  return text.split("").reverse().join("");
}
const isPalindrome = (text) => text === reverse(text);

// 5. Largest number in an array
function largest(arr) {
  let max = arr[0];
  for (const n of arr) {
    if (n > max) max = n;
  }
  return max;
}

console.log("7 is", evenOdd(7));
console.log("Factorial of 5:", factorial(5));
console.log("Is 17 prime?", isPrime(17));
console.log("Reverse of hello:", reverse("hello"));
console.log("Is madam a palindrome?", isPalindrome("madam"));
console.log("Largest:", largest([12, 45, 7, 89, 23]));