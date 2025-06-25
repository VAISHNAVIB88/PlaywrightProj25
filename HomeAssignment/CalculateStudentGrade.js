let Gradecalculation = (score) => {
    switch (true) {
        case score >= 90 && score <= 100:
        console.log("Student has scored A+ grade");    
        return "A+";
        case score >= 80 && score < 90:
        console.log("Student has scored A grade");
        return "A";
        case score >= 70 && score < 80:
        console.log("Student has scored B+ grade");
        return "B+";
        case score >= 60 && score < 70:
        console.log("Student has scored B grade");
        return "B";
        case score >= 50 && score < 60:
        console.log("Student has scored C grade");
        return "C";
        case score >= 40 && score < 50:
        console.log("Student has scored D grade");
        return "D";           
        default:
        console.log("Student has failed");
        return "F";
    }
}
console.log(Gradecalculation(95)); 
console.log(Gradecalculation(85));
console.log(Gradecalculation(75));
console.log(Gradecalculation(65));
console.log(Gradecalculation(55));
console.log(Gradecalculation(45));
console.log(Gradecalculation(35));