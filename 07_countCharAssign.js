// Assignment no 3 Count Char A or a (23/05/23)




function countCharA(word){
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); 
    if (char == 'a' ||  char == 'A') {
        console.log(char);
        count++;
    }
    
}
console.log(`Count total number of characters: ${count}`);
}
countCharA("I AM Learning JavaScript, The Language of Internet")
countCharA("My favourite movie is LAggAn")
