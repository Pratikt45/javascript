// For Each Assign Assignment No 1 (06/06/23)

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(
  "1. Log the array element with its index using forEach() with arrow function"
);
arrayNumbers.forEach((index) => {
  console.log(index);
});
console.log(
  "-------------------------------------------------------------------"
);
console.log("2. Find the positive numbers");
console.log("a. Using forEach() with arrow function");
let arrayNum = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
const arrayPositiveNumbers = [];
arrayNumbers.forEach((element) => {
  if (element > 0) {
    arrayPositiveNumbers.push(element);
  }
});
arrayPositiveNumbers.forEach((element) => console.log(element));

console.log(
  "---------------------------------------------------------------------"
);
console.log(
  "3. Find the negative numbers and Add into new array and log new array"
);
let arrayNums = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNums);
const arrayNegativeNumbers = [];
arrayNums.forEach((element) => {
  if (element < 0) {
    arrayNegativeNumbers.push(element);
  }
});
arrayNegativeNumbers.forEach((element) => console.log(element));

console.log(
  "---------------------------------------------------------------------"
);
console.log("4. Find the even numbers");
let arrayNumber = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(arrayNumber);
const arrayEvenNumbers = [];
arrayNumber.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});
console.log(
  "---------------------------------------------------------------------"
);
console.log("5. Find the sum of all element from arrayNumbers");
let result = 0; // 10
arrayNumbers.forEach((element) => {
  result = result + element;
});
console.log(result);

console.log(
  "---------------------------------------------------------------------"
);
console.log("6. Log only even indexed array value on console.");
arrayNumber.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(index);
  }
});


// Completed