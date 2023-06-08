// Object Clone Assignment (02/06/23)



const arrayNums = [20,3,4,56,90,400,49];
 console.log(`1. Preformming Shallow Clone on array and Update clone array with values -> 55,66`);
const colnedArray = arrayNums;
colnedArray.push(55,66);
console.log(arrayNums);
console.log(colnedArray);
console.log(" ");
console.log(`2. Preformming Deep Cloning using sprade operator and Update Original array with values -> 10, 25`);
const colnedArray2 = [...arrayNums];
arrayNums.push(10,25)
console.log(arrayNums);
console.log(colnedArray2);
console.log(` `);
console.log(`3. Given other array --> arrayEven and merge or concat this array with arrayNums with spread operator`);
const arrayEven = [2, 30 , 14, 8];
const mergeArray = [...arrayNums,...arrayEven];
console.log(mergeArray);
console.log(" ");
console.log(`Create the employee_info object.`);
const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july: "40,0000INR",
        aug: "50,0000",
        jun: "65,0000"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88","1800- 4567 32","+91- 9096 5678 72"]
}
console.log(`log the employee details`);
console.log(`a. Address: Locality, city, state, country`) ;
console.log(employee_info.address.locality);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);
console.log(`b. Mobile Numbers`);
console.log(employee_info.mobiles);
console.log(" ");
console.log(`perform deep copy using JSON.stringfy()`);
console.log(`Step 6:Deep Clone Using JSON.stringfy()`);

const deepClonedemployee_info = JSON.parse(JSON.stringify(employee_info));
console.log(`a. Update property "july_month" salary to 80k on cloned object`);
console.log(employee_info.salary);
employee_info. salary= "80,0000INR";
console.log(`Update Salary:${employee_info .salary}`);
console.log(" ");
console.log(`b. Uopodate prpoperty country to 'United Kingdom' on original object`);
console.log(employee_info.address);
employee_info.country = "United Kingdom";
console.log(`Update Country:${employee_info.country}`);
console.log(" ");
console.log(`c. Logging Updated value for original & cloned object`);
console.log(` Orignal to Update Values:${employee_info .salary},${employee_info.country}`);
