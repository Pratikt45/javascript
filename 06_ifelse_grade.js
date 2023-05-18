//Assignment No 1 ifElse (18/05/23)


function voteEligiblity(age) {
  if (age >= 18 && age < 120) {
    console.log(`Eligible for vote age is: ${age}`);
  } else {
    if (age == 0 || age < 0 || age > 120) {
      console.log(`Invalid Data : ${age}`);
    } else {
      if (age == null && age == undefined) {
        console.log(`Invalid data : ${age}`);
      }
      else{
        console.log(`Not eligible for vote Age is: ${age}`);
      }
    }
  }
}

voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(8);
voteEligiblity(20);
voteEligiblity(-10);
voteEligiblity(200);
voteEligiblity(0);
voteEligiblity(undefined);
voteEligiblity(null);
