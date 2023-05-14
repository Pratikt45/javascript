// //Asssignment No 2.1 (11/05/23)

function show(){
    console.log("This is 1st function having no arguments and no return type :");
}
show();
function display(){
    console.log("This is 2nd function having no arguments and no return type :");
}
display();

console.log("-----------------------------------------------------------");

// //Asssignment No 2.2 (11/05/23)
function personalDetails(firstName,lastName, collegeName){
    console.log("My Personal Details is : ");
    console.log("                                   ");
    console.log("First Name     : ", firstName);
    console.log("Last Name      : ", lastName,);
    console.log("College Name   : ", collegeName,);
}
personalDetails("Pratik","Thorat","PRPCEM");
console.log("-----------------------------------------------------------");
//Asssignment No 2.3.b (11/05/23)
function swapValueDude(hubby,wife){
    console.log("Before Swaping : ",hubby,wife);
    var temp = hubby
    var hubby = wife
    var wife = temp
    console.log("After Swaping  : ",hubby,wife);

}
swapValueDude("Virat","Anushka")

//Asssignment No 2.3.c (11/05/23)
function swapValueDude(value1,value2){
    console.log("Before Swaping : ",value1,value2);
    var temp = value1
    var value1 = value2
    var value2 = temp
    console.log("After Swaping  : ",value1,value2);

}
swapValueDude(1000,2000);

console.log("-----------------------------------------------------------");
//Assignment No 2.4.b (11/05/23)
function addThreeValues(val1, val2, val3){
    var temp = val1+val2+val3;
    console.log("Result         : ",temp);
}
addThreeValues(10.23,600,40);


//Assignment No 2.4.c (11/05/23)
function addThreeValues(val1, val2, val3){
    var temp = val1 + val2 + val3;
    console.log("Result         : ",temp);
}
addThreeValues("Hello ","Good ","Morning",);

