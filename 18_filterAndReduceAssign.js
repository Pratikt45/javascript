// Filter and reduce Assignment A (07/06/23)


class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log("Step 1. Find all the employee from Wipro company");
array_employees.filter( (employee)=> {
    if (employee.emp_company=="Wipro") {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});
console.log(" ");

console.log("Step 2. Find all the employee from IT or HR dept");
array_employees.forEach( (employee)=> {
    if (employee.emp_dept=="IT" || "HR") {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});
console.log(" ");

console.log("3 step. find all the employee whose emp id's are greater than 50");
array_employees.forEach( (employee)=> {
    if (employee.emp_id>50) {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});
console.log(" ");

console.log("4 step. find all the employee whose whose name start with A, V, or M");

array_employees.forEach( (employee)=> {
    if (employee.emp_name.startsWith("A") ||employee.emp_name.startsWith("V") ||employee.emp_name.startsWith("M") ) {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});
console.log(" ");


console.log("5 step. find the average salary of employee for all the department");
const newArray = []
array_employees.filter((element)=>{
   newArray.push(element.emp_salary)
});
console.log(newArray);

const sum = newArray.reduce((runningTotal, value) =>{
    return runningTotal+value;

});
const average=sum/newArray.length;
console.log(`Average Salary of Emp is :${average}`);
console.log(" ");


console.log("6. step.find the average salary for IT department");
const newArray2 = []
array_employees.filter((element)=>{
    if(element.emp_dept=="IT")
   return newArray2.push(element.emp_salary)
});
console.log(newArray2);

const sum1 = newArray.reduce((runningTotal, value) =>{
    return runningTotal+value;

});
const average1=sum/newArray.length;
console.log(`Average Salary of IT Dept Emp is :${average1}`); 


//Completed