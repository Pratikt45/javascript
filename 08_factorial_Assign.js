//Assignment no 1 Factorial of Number (23/05/23)


function factorialOfNum(num){
    let factorial = 1;
   
        for (let index = num; index >=1; index--)
        factorial = factorial * index;
        console.log( `Factorial of ${num} is:${ factorial}`);
        if(num==0){
            console.log(`Factorial of `);
        }
       
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);

