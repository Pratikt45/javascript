// Assignment on For Each Assignment No. 2 (06/06/23)

class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Financ",4700,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const array_employees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`Q1 Find out the 'TCS' employee details.`);
array_employees.forEach((employee) => {
    if (employee.emp_company=="TCS") {
        console.log(`Emp Name ${employee.emp_name}`);
    }
});
console.log(`-------------------------------------------------------------------------------`);

console.log(`Q2 Find the employee with salary is greater than equal to 50000.`);
array_employees.forEach((employee) => {
    if (employee.emp_salary>=50000) {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});
console.log(`-------------------------------------------------------------------------------`);

console.log(`Q3 Find the sum of all employee salary.`);
let sal= 0;
array_employees.forEach( (employee) => {
    sal = sal + employee.emp_salary;
}
);
console.log(`The Sum of all employee salary is : ${sal}`);
console.log(`-------------------------------------------------------------------------------`);

console.log(`Q4 Find the average salary of employee `);
let totalSal=0;
array_employees.forEach((employee) => {
    totalSal= totalSal+employee.emp_salary;
}
);
let average = totalSal/array_employees.length
console.log(`Average salary is : ${average}`);
console.log(`-------------------------------------------------------------------------------`);

console.log(`Q5 Find the 'IT' OR 'HR' dept employee whose salary is greater than equal to 75000.`);
array_employees.forEach((employee) => {
    if (employee.emp_dept=="IT"&& employee.emp_salary>=75000||employee.emp_dept=="HR"&& employee.emp_salary>=75000) {
        console.log(`Emp ID :${employee.emp_id}, Emp Name :${employee.emp_name}, Emp Dept :${employee.emp_dept}, Emp Sal :${employee.emp_salary}, Emp company :${employee.emp_company}`);
    }
});

// Complete