//Assignment No. (19/05/23)


var intrview = function(gradScore, hscScore, sscScore, candidateName){
    if (gradScore>=70 || hscScore>=80 || sscScore>90) {
        console.log(`Congrates ${candidateName} You are eligible for TCS interview.`);
    } else {
        console.log(`Unfortunately ${candidateName} You are not eligible for interview.`);

    }
}
intrview(80,86,90,"Pratik");
intrview(70,65,55,"Prashanjit");
intrview(60,79,88,"Rahul");