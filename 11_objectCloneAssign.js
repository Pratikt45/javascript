// Object cloning and transversing Assignment (30/05/23)



let bankSbi = {
    bankName : "State Bank of India",
    bankAddress : "Pune",
    ifscCode : "sbix1234",
    bankBranch : "Pimpri Chinchwad",
    showDetails : function(){
        console.log(`bankName : ${this.bankName}, bankAddress : ${this.bankAddress}, ifscCode : ${this.ifscCode}, bankBRanch ${this.bankBranch}`)
    }
}

let bankLocation = {
    street : "Kasarwadi, P.b.no.1",
    city : "Pune",
    pinCode : "411034",
    showDetails : function(){
        console.log(`street : ${this.street}, city : ${this.city}, pinCode : ${this.pinCode}`)
    }
}
console.log(`1. Create the object 'bankSbi' with 4 properties`);
bankSbi.showDetails();
console.log(' ');
console.log(`2.Create the object with properties: street, city, pin `);
bankLocation.showDetails();


console.log(bankLocation);
// console.log(" ");
console.log(`3. Clone the step 1 and step 2`);
const clone = Object.assign(bankSbi,bankLocation)
console.table(clone);
console.log(" ");
console.log(`4. Create the object using literals -> rateOfInterest with properties`);
let rateOfInterest = {
    honeLoneInterest : "8.50%",
    personalLoneInterest : "12.50%",
    dueInterest : "7.10%"
}
console.log(rateOfInterest);
console.log(`5. Merge the step 1, step 2 and step 4`);
const merge = Object.assign(bankSbi,bankLocation,rateOfInterest)
console.table(merge);
console.log(" ");
console.log(`6. traverse this merged object - step 5 using for in loop`);
for (const key in merge) {
    if (Object.hasOwnProperty.call(merge, key)) {
        const value = merge[key];
        console.log(`${key}: ${value}`);
    }
}
