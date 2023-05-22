//Assignment No. (20/05/23)

console.log(`Q. 1`);

var str  = "I am very good IT Developer";
count = 0
for (let index = 0; index < str.length; index++)
{
    char = str.charAt(index)
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
        console.log(char);
      count++;
    }
}
console.log(`Total no of vowels present in above string is : ${count}`);
console.log(` `);
console.log(`Q. 2`);
function sumOfCube(){
  var sum =0;
    for (let i = 1;i <= 5; i++){
        sum = sum + i * i * i;
    }
    console.log(`Sum of cube of number from 1 to 5 is ${sum}`);  
}
sumOfCube()

console.log(` `);
console.log(`Q. 3`);
function oddPostionedChar(str){
  var word = ""
 for(let i=0; i<str.length; i++){
  var char = str.charAt(i)
      if(i%2!==0 && char!=" "){
      word = word+char;
    }
  }
  console.log(word);
 }
oddPostionedChar("Hard work always pays back")
oddPostionedChar("Soon I will be Angular IT Champ")
