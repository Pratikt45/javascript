// Arrow Function Assignment A (05/06/23)

console.log(
  `1. With no args no return value log message on console inside arrow function.`
);

let arrowFun = () => {
  console.log(`"Good Morning, Today is Monday"`);
};
arrowFun();
console.log(`--------------------------------------------------------`);

console.log("2. Perform the multiplication with 3 args and no return value");
let multiply = (n1, n2, n3) => {
  let result = n1 * n2 * n3;
  console.log(`a. Multiplicaton of Passed values :${result} `);
};
multiply(5, 5, 2);

const multi = (n1, n2, n3) => {
  const result = 10 * 4 * 1;
  console.log(`b. Multiplicaton of Passed values : ${result}`);
};
multi(10, 4, 1);
console.log(`--------------------------------------------------------`);
console.log("3. The addition with 5 args and return value");
let add = (num1, num2, num3, num4, num5) => {
  let result = num1 + num2 + num3 + num4 + num5;
  return result;
};
let result = add(100, 100, 200, 349, 756);
console.log(`a. Addition of Passed values : ${result}`);

let arrow_Fun = (str) => {
  console.log(str);
};
arrow_Fun('"I am", "learning", "ES6", `features`, "in depth."');


// Completed