// Assignment no 3 Operator Ternary Assignment

function maleMirrageEliiblity(gender,age, boyName){
   var result = (gender == "Male")&& (age >= 21 )? `Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`
   console.log(result);
}
maleMirrageEliiblity("Male", 25, "Bill Gates")

function maleMirrageEliiblity(gender,age, boyName){
   var result = (gender == "Male")&& (age >= 21 )? `Hey ${boyName} you are eligible for Marriage`:`Hey ${boyName} you are not eligible for Marriage`
   console.log(result);
}
maleMirrageEliiblity("Male", 17, "Stew Jobs")

console.log(" ");
console.log("-----------------------------------------");


function femaleMirrageEliiblity(gender,age, girlName){
    var result = (gender == "Female")&& (age >= 18 )? `Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`
    console.log(result);
 }
 femaleMirrageEliiblity("Female", 27, "Malinda Gates")
 
 function femaleMirrageEliiblity(gender,age, girlName){
    var result = (gender == "Female")&& (age >= 18 )? `Hey ${girlName} you are eligible for Marriage`:`Hey ${girlName} you are not eligible for Marriage`
    console.log(result);
 }
 femaleMirrageEliiblity("Female", 16, "Jenifer")