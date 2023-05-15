// Operator Assignment No 01 (15/05/23)
console.log("Q.1.");
function squareOfWordLength1(value){
  
    console.log(`Invoking the function for value "JavaScript"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of its Length is : ${squareOfWordLength}`);
}
squareOfWordLength1("JavaScript")
console.log(`------------------------------------------------------ `);

function squareOfWordLength2(value){
    console.log(`Invoking the function for value "Google Chrome"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of its Length is : ${squareOfWordLength}`);
}
squareOfWordLength2("Google Chrome");
console.log(`------------------------------------------------------ `);

function squareOfWordLength3(value){
    console.log(`Invoking the function for value "Developer Smart"`);
    var word = value;
    var lengthOfWord = word.length;
    console.log(`the length of word is : ${lengthOfWord}`);
    var squareOfWordLength = lengthOfWord*lengthOfWord;
    console.log(`Square of its Length is : ${squareOfWordLength}`);
}
squareOfWordLength3("Developer Smart");
console.log(`------------------------------------------------------ `);
console.log(" ");


var value2 = `I am Angular Developer`;
console.log("Q.2.");
function divide(){
    console.log(`The given String is : ${value2}`);
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var division = value2length/valeOfWord;
    console.log(`length of given string is : ${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is divided by total number of words available in that string is : ${division}`);
}
divide()
function multiply(){
    console.log(" ");
    var value2length = value2.length;
    var wordInValue2 = value2.split(" ");
    var valeOfWord = wordInValue2.length;
    var multiplication = value2length*valeOfWord;
    console.log(`length of given string is : ${value2length}`);
    console.log(`total number of words available in that string is : ${valeOfWord}`);
    console.log(`The string length is multiplied by total number of words available in that string is : ${multiplication}`);
}
multiply()