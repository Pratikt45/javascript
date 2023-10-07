arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
console.log(`The given String is: ${arrayNumbers}`);


console.log(`Step 1:Total Elements..`);
var arrayNumbersLength = [ 20,31,40,25,23,11,29,9,60,2,11 ];
var arrayNumbersLength = arrayNumbersLength.length;
console.log(`Length of array is :${arrayNumbersLength}`);

console.log(`Step:2`);
//the 1st and last element in arrayNmubers.
const firstIndexValue = arrayNumbers[0];
console.log(`First index value: ${firstIndexValue}`);
const lastIndexValue = arrayNumbers[10];
console.log(`Last element value: ${lastIndexValue}`);


console.log(`Step 3:Third Last Element using length property..`);
//the 1st and last element in arrayNmubers.
const thirdElementValue = arrayNumbers.lengths;
const lastThirdElementValue = arrayNumbers[arrayNumbersLength-3];
console.log(`Third last element value: ${lastThirdElementValue}`);


console.log(`Step 4:This is Even Number`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbers) {
     if (element%2==0)
     console.log(element);
 }

 
 console.log(`Step 5:This is Odd Number`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of arrayNumbers) {
     if (element%2)
     console.log(element);
 }

console.log(`Step 6:Even number addition with position:`);
 arrayNumbersEvenPostion = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element in arrayNumbersEvenPostion) {
     if (element%2==0)
     console.log(`${arrayNumbersEvenPostion [element]}`);
     
 }
 const arrays =  [20,40,60,2];
var sum=0;
for (let index = 0; index <arrays.length ; index++) {
    sum += arrays[index];
}
console.log(`Sum of Odd Positioned Element:${sum}`);
 
 console.log(`Step 7:Odd number addition with position`);
 arrayNumbersOddPostion = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element in arrayNumbersOddPostion) {
    if (element%2)
     console.log(`${arrayNumbersOddPostion [element]}`);
    
 }
 const arr =  [ 31,25,11,9,2];
var sum=0;
for (let index = 0; index <arr.length ; index++) {
    sum += arr[index];
}
console.log(`Sum of Odd Positioned Element:${sum}`);


console.log(`Step 8:Sum of all element from array..`);
//Sum Of ALL Element from arrayNumbers
const array =  [ 20,31,40,25,23,11,29,9,60,2,11 ];
var sum =0;
for (let index = 0; index < array.length; index++) {
     sum += array[index];
}
 console.log(`Sum of Total element : ${sum}`);


 console.log(`Step 9:Find the number multiple of 5..`);
 //find the number which are multiple of 5.
 console.log(`Multiple of 5 is: `);
 const num = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 for (const element of num) {
     if (element%5==0)
     console.log(element);
 }



 console.log(`Step 10:Number 115 is available..`);
 console.log(`false`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 arrayNumbers.includes(115);

 console.log(`Step 11:Number 23 is available..`);
 console.log(`true`);
 arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 arrayNumbers.includes(23);


console.log(`Step:12`);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
console.log(arrayNumbers);
arrayNumbers.splice(3,0, 55,66)
console.log(arrayNumbers);


console.log(`Step:13`);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
 var slice = arrayNumbers.slice(4)
 console.log(arrayNumbers);
var arrayNumbers = [ 20,31,40,25,23,11,29,9,60,2,11 ];
const arraySpliced = arrayNumbers.splice(0,5);
console.log(arrayNumbers);