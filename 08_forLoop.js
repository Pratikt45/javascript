// For Loop ClassWork (19/05/23)



for (let index = 0; index <= 10; index++) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");


//ClassWork (20/05/23)
// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");
for (let index = 17; index <=170; index=index+17) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");


for (let index = 190; index >=19; index=index-19) 
{
    console.log(index); 
}
console.log("After loop");


// for (let index =8; index <=80; index=index=+8) 
// {
//     console.log(index); 
// }

// JavaScript = J a v a S c r  i  p  t
var str = "JavaScript"; // 9
for (let index = 0; index < str.length; index++) { // 0  1   2
     var char = str.charAt(index); // J  a v
     console.log(char); 
}



//wordlength print words 



function reverseWord(word){
    var reverseString = "";
    var wordLength = word.length - 1;
    for (let index = wordLength; index >= 0; index--) { // index = 9  8 
        var char = word.charAt(index);
        reverseString = reverseString.concat(char);    
    }
console.log(reverseString);
}
reverseWord("JavaScript");
reverseWord("Google Chrome");
reverseWord("Developer");