var interview = function(gradScore,hscScore,sscScore,candidateName){

    var candidates = (gradScore>=hscScore ||hscScore>=80 ||sscScore>90)?`Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately you are not eligible for TCS interview`
    console.log(candidates);
}
interview(80,86,90,"Pratik")


var interview = function(gradScore,hscScore,sscScore,candidateName){

    var candidates = (gradScore>=hscScore ||hscScore>=80 ||sscScore>90)?`Congrates ${candidateName} you are eligible for TCS interview`:`Unfortunately you are not eligible for TCS interview`
    console.log(candidates);
}
interview(70,65,55,"Prashanjit")


var interview = function(gradScore,hscScore,sscScore,candidateName){

    var candidates = (gradScore>=hscScore ||hscScore>=80 ||sscScore>90)?`Congrates you are eligible for TCS interview`:`Unfortunately you are not eligible for interview`
    console.log(candidates);
}
interview(60,79,88,"Rahul")