// Filter Assignment A (07/06/23)


const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given Array is : ${arrayNumbers}` );

console.log("Step 1. Find out the number which are greater then 50");
const arrayGreaterThan50 = arrayNumbers.filter( (element)=> {
    return element>50;
} );
console.log(arrayGreaterThan50);

console.log("Step 2. Find out all the even numbers");
const arrayEven = arrayNumbers.filter( (element)=> {
    return element%2==0;
} );
console.log(arrayEven);

console.log("Step 3. Find out all the odd numbers");
const arrayOdd = arrayNumbers.filter( (element)=> {
    return element%2!=0;
} );
console.log(arrayOdd);

console.log("Step 4. Find out all numbers which are multiple of 5");

const arrayMulFive = arrayNumbers.filter( (element)=> {
    return element%5==0;
} );
console.log(arrayMulFive);

console.log("Step 5. Find out all numbers which between 20 and 50");

const arrayBet = arrayNumbers.filter( (element)=> {
    if (element >=20 && element <=50){
        return element ;
       }
    
} );
console.log(arrayBet);


// Complete
