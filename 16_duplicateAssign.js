// Assignment No 1 (03/06/23)

console.log(`1. Remove duplicate Element from Give Array`);
const arrayNum = [11,3,4,11,4,7,3];
console.log(`Given Array is : ${arrayNum}`);
const setOfNum = new Set();
for (const element of arrayNum) {
    setOfNum.add(element);
}
 console.log(setOfNum);

 //OR 

// const arrayNum1 = [11,3,4,11,4,7,3];
// const setOfNum1 = new Set(arrayNum1);
//  console.log(setOfNum1);
console.log(' ');

console.log(`2. Changing the first and last element of array from lowercase to Uppercase `);
 const str = "How are you mate";
 console.log(`Given String is : ${str}`);
 let newChar = "";
 const arrayWord = str.split(" ")
 for (const element of arrayWord) {
    for (let index = 0; index < element.length; index++) {
        let char = ""
        if (index==0||index==element.length-1) {
            char= element[index].toUpperCase();
        } else {
            char= element[index];
        }
        newChar = newChar + char;
    }
    newChar = newChar + " ";
    
 }
 console.log(newChar);