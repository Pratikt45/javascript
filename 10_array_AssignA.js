//Assignment No 1 Arrays (23/05/23)


var arrayFruit=["Banana","Orange","Apple","Mango","Water Melon"];
const arrayLength = arrayFruit.length;
const firstElement = arrayFruit[1];
var lastElement = arrayFruit[arrayLength-1];

console.log(`First element of array is : ${firstElement}`);
console.log(`Last element of array is : ${lastElement}`);
console.log(" ");

arrayFruit.unshift("Papaya")
console.log(arrayFruit);
console.log(" "); 

arrayFruit.push("Pineapple")
console.log(arrayFruit);
console.log(" ");

arrayInsert = arrayFruit.splice(5, 0, "Dragon Fruit")
console.log(arrayFruit);
console.log(" ");

arrayInsert = arrayFruit.splice(2, 1, "Kiwi")
console.log(arrayFruit);
console.log(" ");

var slice = arrayFruit.slice(1, 4)
console.log(slice);
console.log(" ");

var arrayFruit=["Banana","Orange","Apple","Mango","Water Melon"]
var last3 =arrayFruit.slice(2);
console.log(last3);