// Assignment No. 1 While loop (26/05/23)



console.log(`1. Printing numbers from 5 to 15 by incrementing 1`);
let i = 5;
while (i<=15) {
    console.log(i);
    i++;
}
console.log(` `);

console.log(`2. Printing numbers from 50 to 40 by decrementing 1`);
let j = 50;
while (j>=40) {
    console.log(j);
    j--
}
console.log(` `);

console.log(`3. Find the first 15 odd numbers`);
let k = 1
while (k<=15) {
    if (k%2 != 0) {
        console.log(k);
    }
    k++;
}
console.log(` `);

console.log(`4. Find the first 10 even numbers`);
let l = 1
while (l<=10) {
    if (l%2 == 0) {
        console.log(l);
    }
    l++;
}
console.log(` `);

console.log(`5. Printing the table of 5`);
let m = 5;
while (m<=50) {
    console.log(m);
    m = m + 5;
}
console.log(` `);

console.log(`6. Printing the table of 10`);
let n = 10;
while (n<=100) {
    console.log(n);
    n = n + 10;
}
console.log(` `);

console.log(`7. Printing the table of 10 in reverse order`);
let o = 100;
while (o>=10) {
    console.log(o);
    o =  o - 10;
}
console.log(` `);

