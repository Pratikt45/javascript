//Assignment N0 1 (13/05/23)

var squareOfFive = function (five, six, Twentyfive, hundred){
    var result5 = five*five
    var result6 = six*six
    var result25 = Twentyfive*Twentyfive
    var result100 = hundred*hundred
    console.log(`1. Square of Five is : ${result5}, Square of six is : ${result6}, Square of Twenty Five is : ${result25}, Square of Hundred is : ${result100}`);
}
squareOfFive(5, 6, 25, 100)
console.log(" ");


var typeOfFun = typeof squareOfFive
console.log("2.Type of Function is :",typeOfFun);
console.log(" ");


var areaOfRect = function(length, width){
    var area = length*width
    console.log(`3. The area of rectangle is : ${area}`);
}
areaOfRect(499, 917)
console.log(" ");


var virat = 'Virat';
var anushka = 'Anushka';
var swapValues = function(virat , anushka){
    console.log(`4.a Before Swap : ${virat}, ${anushka}`);
    var temp = virat
    virat = anushka
    anushka = temp
    console.log(`    After Swap  : ${virat}, ${anushka}`);
}
swapValues(virat, anushka)
console.log(" ");


var num1 = 1000;
var num2 = 2000;
var swapValues = function(num1 , num2){
    console.log(`4.b Before Swap : ${num1}, ${num2}`);
    var temp = num1
    num1 = num2
    num2 = temp
    console.log(`    After Swap  : ${num1}, ${num2}`);
}
swapValues(1000, 2000)
console.log(" ");


var statement = "JS is the most popular language of internet"
    var stateMent = function(){
    console.log("5.a. Total character available in the string is : " ,statement.length  );
    console.log("  b. The character at index 6 is : " ,statement.charAt(6));
    console.log("  c. The character at index 11 is : " ,statement.charAt(11));
    console.log("  d. The character at index 11 is : " ,statement.charAt(statement.length-1));
    console.log("  e. The first character from the string is : " ,statement.charAt(0));
    console.log("  f. The total number of words of the given string is : " ,statement.split(" "));
    var abc = statement.split(" ");
    var xyz = abc.length;
    console.log("      square is :",xyz*xyz);
}
stateMent()


//Assignment 2 (13/05) completed