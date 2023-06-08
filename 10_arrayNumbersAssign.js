//Assignment No 1 Array Numbers (24/05/23)
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`The Given Array is : ${arrayNumber}`);

console.log(`Q1. Total elements available`);
var totalL = arrayNumber.length;
console.log(totalL);
console.log(`----------------------------------------------------`);

console.log(`Q2. First and last elements in an array`);
var firstE = arrayNumber[0];
console.log(`First Element available in an Array is: ${firstE}`);
var lastE = arrayNumber[totalL - 1];
console.log(`Last Element available in an Array is: ${lastE}`);
console.log(`----------------------------------------------------`);

console.log(`Q3. The third last element `);
var thirdE = arrayNumber[totalL - 3];
console.log(`The third last element in an array is : ${thirdE}`);
console.log(`----------------------------------------------------`);

console.log(`Q4. Finding all even numbers`);
for (const element of arrayNumber) {
  if (element % 2 == 0) console.log(element);
}
console.log(`----------------------------------------------------`);

console.log(`Q5. Finding all odd numbers`);
for (const element of arrayNumber) {
  if (element % 2 != 0) console.log(element);
}
console.log(`----------------------------------------------------`);

console.log(`Q6. Finding all the even positioned elements in an array`);
console.log("Even Possitioned Elements ");
for (const index in arrayNumber) {
  if (index % 2 == 0) {
    console.log(`${arrayNumber[index]}`);
  }
}
console.log("----------------------------------------------------");

console.log(`Q7. Finding all the even positioned elements in an array`);
console.log("Odd Possitioned Elements ");
for (const index in arrayNumber) {
  if (index % 2 != 0) {
    console.log(`${arrayNumber[index]}`);
  }
}
console.log("----------------------------------------------------");

console.log(`Q8.Sum of all element from array.`);
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var sum = 0;
for (let index = 0; index < array.length; index++) {
  sum += array[index];
}
console.log(`Sum of Total element : ${sum}`);

console.log(`Q9. Finding the number which are multiple of 5`);
for (const element of arrayNumber) {
  if (element % 5 == 0) {
    console.log(element);
  }
}
console.log(`----------------------------------------------------`);

console.log(`Q10. Finding the numbers are available in an array`);
var avail = arrayNumber.includes(115);
console.log(`Is 115 available in an array: ${avail}`);
console.log(`----------------------------------------------------`);

console.log(`Q11. Finding the numbers are available in an array`);
var avail = arrayNumber.includes(23);
console.log(`Is 23 available in an array: ${avail}`);
console.log(`----------------------------------------------------`);

console.log(`Q12.Insert Number:-> 55,66 before index 3`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(arrayNumbers);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log("----------------------------------------------------");

console.log(`Q13. Delete 3 element starting from index 4`);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
var slice = arrayNumbers.slice(4);
console.log(arrayNumbers);
var arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const arraySpliced = arrayNumbers.splice(0, 5);
console.log(arrayNumbers);
