//Assignment No 02 Grade Calclulation (19/05/23)

function gradeCalculation(mark) {
  if (mark >= 90 ) {
    console.log(`Fantastic marks : ${mark}, Your grade is A+`);
  } else {
    if (mark >= 75 && mark < 90) {
      console.log(`Excellent marks : ${mark}, Your grade is A`);
    } else {
      if (mark >= 50 && mark < 75) {
        console.log(`Good marks : ${mark}, Your grade is B`);
      } else {
        if (mark >= 35 && mark < 50) {
          console.log(`Marks : ${mark}, Your grade is C, Need Improvement`);
        } else {
          if (mark == 0 || mark < 0 || mark > 100 || mark==undefined || isNaN(mark) || mark>100 || mark==" ")
           { 
            console.log(`Marks : ${mark} Please provide the valid marks `);
          }
        }
      }
    }
  }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);