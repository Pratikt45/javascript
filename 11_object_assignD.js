// Assignment on Object (29/05/23)


let professor = {
    name : "Pratik",
    age : "23",
    gender : "male",
    height : "5'10feet",
    Qualification : "BE",
   //Adding nested object
    degree :{
        engineering:"CSC",
        PHD: 'Adv Computing',
        diploma: "Mech",
        masters : "CSE",
    },
    certificate:["Hacker Rank Participation","IFE course","Adv Programming"],
    value :function(){
        let degrees=`engineering: ${this.degree.engineering},
            PHD: ${this.degree.PHD}, Diploma : ${this.degree.diploma}`;
        return degrees;
    }

}
console.log(`1. Think of all properties that you could add`);
console.log(`name : ${professor.name}`);
console.log(`age : ${professor.age}`);
console.log(`gender : ${professor.gender}`);
console.log(`height : ${professor.height}`);
console.log(`qualification : ${professor.Qualification}`);
console.log(" ");
console.log(`2. Also include nested object 'degree' like engineering: 'CSS', PHD: 'Adv Computing' and few more.` );
console.log(professor.degree);
console.log(" ");
console.log(`3. also add one array -> 'certificates' with his certificate like 'Hacker Rank Participation',
'certificate in IFE course', 'Certificate in Adv Programming'`);
console.log(professor.certificate);
console.log(" ");
console.log(`4. Add function as a value which should concat all degree in step 2 `);
let show=professor.value();
console.log(`total degrees are ==>${show}`);
console.log(" ");
console.log(`Add new property like total experience`);
professor.totalExperience="14 years";
console.log(`total Experience is : ${professor.totalExperience}`);
console.log(" ");
console.log(`6. Modify any existing property and log complete object on console`);
professor.age= 40;
professor.height = "6feet";
console.log(professor);
console.log(" ");
console.log(`7. Add one new certificate -> "Oracle Certificate" at the end of array -> certificate`);
professor.certificate.push("Oracle Cerificate");
console.log(`${professor.certificate}`);
console.log(" ");
console.log("8. Log the last element of array certificate ");
console.log(`${professor.certificate[professor.certificate.length-1]}`);

