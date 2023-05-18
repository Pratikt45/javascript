// Assignment no 2 Operator Assignment (16/05/23)

var greaterNumber = function (num1, num2){
    
    var result =num1>=num2?`${num1} is greatest number`:`${num2} is greatest number`;
    console.log(result);
}
greaterNumber(10, -10)

var greaterNumber = function (num1, num2){
    
    var result =num1>=num2?`${num1} is greatest number`:`${num2} is greatest number`;
    console.log(result);
}
greaterNumber(800, 899)

console.log("------------------------------------------");

var evenOdd = function (val){
    var isEvenOrOdd = val
    var result = isEvenOrOdd%2 == 0? `${isEvenOrOdd} is even`: `${isEvenOrOdd} is odd`
    console.log(result);
}
evenOdd(29)

var evenOdd = function (val){
    var isEvenOrOdd = val
    var result = isEvenOrOdd%2 == 0? `${isEvenOrOdd} is even`: `${isEvenOrOdd} is odd`
    console.log(result);
}
evenOdd(4)

var evenOdd = function (val){
    var isEvenOrOdd = val
    var result = isEvenOrOdd%2 == 0? `${isEvenOrOdd} is even`: `${isEvenOrOdd} is odd`
    console.log(result);
}
evenOdd(0)

var evenOdd = function (val){
    var isEvenOrOdd = val
    var result = isEvenOrOdd%2 == 0? `${isEvenOrOdd} is even`: `${isEvenOrOdd} is odd`
    console.log(result);
}
evenOdd(101)
console.log("------------------------------------------");
var eveOddLength = function(js){
    var javaScript = js.length;
    var result = javaScript%2 == 0? `${js} is even number length`: `${js} is odd number length`
    console.log(result);
}
eveOddLength("JavaScript")

var eveOddLength = function(dev){
    var devloper = dev.length;
    var result = devloper%2 == 0? `${dev} is even number length`: `${dev} is odd number length`
    console.log(result);
}
eveOddLength("Developer")

var eveOddLength = function(go){
    var google = go.length;
    var result = google%2 == 0? `${go} is even number length`: `${go} is odd number length`
    console.log(result);
}
eveOddLength("Google")