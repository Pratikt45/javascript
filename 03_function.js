var num1 = 100;
var num2 = 200;

function swapVariable(valueOne, valueTwo){
    console.log("Before Swap :", valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After Swap :", valueOne, valueTwo);

}
swapVariable(num1,num2);

//12/05/23
function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}
var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);