// Map Method Assignment No 3 (06/06/23)


const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given Array is : ${arrayNumbers}`);
console.log("Q1. Add 10 into each element");
const arrayAdd = arrayNumbers.map( (element) => {
    return element+10;
} );
console.log(arrayAdd);

console.log('-------------------------------------------------------------');
console.log("Q2. Square the each array element");
const arraySq = arrayNumbers.map( (element) => {
    return element*element;
} );
console.log(arraySq);

console.log('-------------------------------------------------------------');
console.log("Q3. Add the index value into its corresponding each array element");
const arrayTrans = arrayNumbers.map( (element, index) => {
    return element+index;
} );
console.log(arrayTrans);


// Complete