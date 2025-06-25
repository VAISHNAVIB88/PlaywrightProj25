// var -> Global and function scoping
//let and const -> Block Level Scoping - what is block level it will be inside curly brace

var age=18  // Global Scope

function voting(){
    //let voterApplicationStatus='Not Eligible' //block Scoped and cant be redclare

    if(age===18) { // true
        var isEligibleToVote=true //functional scope .. if not satisfying the if condition
        let voterApplicationStatus='Eligible for Voter ID' //block scoped
        console.log("He/She is eligibleto apply: "+ voterApplicationStatus)
    }
    else{
        var isEligibleToVote=false
        console.log("He/She is not eligible to apply:" +voterApplicationStatus)
    }
    console.log(isEligibleToVote)
}
console.log(age)
voting()