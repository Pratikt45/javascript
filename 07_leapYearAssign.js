// Assignment No 2 on calculate leap year (22/05/23)


let checkLeapYear = function(leapYear){
    if (leapYear == null || leapYear == undefined || isNaN(leapYear) || leapYear == " ") {
        console.log(`Please enter the valid input : ${leapYear}`);
    } else {
        if (leapYear %4 == 0) {
             console.log(`${leapYear} is a Leap Year`);
        } else{
        console.log(`${leapYear} is not a Leap Year`);  
    }
}
}
checkLeapYear(2023);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(null);
checkLeapYear(undefined);
checkLeapYear("Twenty Twenty");
checkLeapYear(NaN);
checkLeapYear(1750);