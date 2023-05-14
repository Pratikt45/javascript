//Assignment 2 (12/05/23)

console.log("1. Print the string as it is on console");
console.log("    Hey you are doing good, keep it up   ");
console.log("  ");

function stringHandsOn(){
console.log("2. Calculate length of the String");
var handsOn = "   Hey you are doing good, keep it up   ";
var handsOnLength =  handsOn.length;
console.log("Total character length is:", handsOnLength);
console.log("  ");

console.log("3. Remove the leading and trailing extra spaces and log string on console with it's length");
var trimHandsOn = handsOn.trim();
var lengthAfterTrim = trimHandsOn.length;
console.log("Length after removeing leading and trailing Space: ", trimHandsOn.length);
console.log(" ");

console.log("4. Print the total number extra spaces count that is removed in step 3.");
console.log("The total number of extra spaces is removed is : ", handsOnLength-lengthAfterTrim);
console.log("  ");

console.log("5. Print the first and last character on the same line after trim()");
var printFirst = "Hey you are doing good, keep it up";
var firstChar = printFirst.charAt(0);
var lastChar = printFirst.charAt(printFirst.length-1);
console.log(`The first charachter after trim is: ${firstChar} and the last character after trim is : ${lastChar}`)
console.log("  ");

console.log("6. Print the count of total words available in the string after step 3");
var totalWord = "Hey you are doing good, keep it up";
var str = totalWord.split(" ");
console.log("Total number of words in string is :",str);
console.log("  ");

console.log("7. Print the index of word 'good' from the given string");
var indexgood = totalWord.split(" ")
console.log("The index of good in string is :",indexgood);
console.log("  ");

console.log("8. Print the substring starting from index 22, using substring() and slice()");
console.log(`index 22 using substring is : ${totalWord.substring(22)} index 22 using slice is : ${totalWord.slice(22)}`);
console.log("  ");


console.log("9. Check, is string ends with word 'up' after step 3?");
console.log(`Is string ends with "up" is : ${totalWord.endsWith("up")}`);
console.log("  ");

console.log("10. Check is string starts with word 'Hey' after trimming → i.e after step 3 output string value");
console.log(`Is string starts with "Hey" is : ${totalWord.startsWith("Hey")}`);
}
stringHandsOn();



//Completed