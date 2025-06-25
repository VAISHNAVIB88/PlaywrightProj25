
//Using Index
let username='Vaishnavi.b88@gmail.com'

//find length of the String
console.log("Length of Username:" +username.length)

let companyName=`Testleaf`

//print single character from string 'L'
console.log(companyName.charAt(4)) // charAt index will start from '0'

//print the position of the character -s
console.log("Print position of the character s which is:" +companyName.indexOf('s')) // it will print only the first occurance of the letter.
//console.log("Print position of the character s which is:" +companyName.indexOf('st')) it will not print t

//print the last character in the string
console.log("Position of Last character:" +companyName.lastIndexOf('e'))


//Concatination//
let price='rs1500'
//console.log('The Price of the product's ' +price) //here you have an error so use back tick
console.log(`The Price of the product's ` +price)

//template literal -> ${price} alternative for concatination using + sign we can use this.
console.log(`This price of product is ${price}`)

let firstName=`Vaishnavi`
let lastName=`Babu`
console.log(firstName.concat(lastName))

let tool='playwright'
console.log(`${tool} with javascript we can use automation`)

//substring  -> print value based on index

let data="playwright"
//4 to 7 -> weigh
console.log(data.substring(4,7)) // start index which is at 4 and end with index which is in 7-1 ie 4 to 6
console.log(data.substring(0,10))
console.log(data.substring(4,2)) //it will take which is min and what is max
console.log(data.substring(2,2))
console.log(data.substring(2,3))

//Reverse a string
let myName="Vaishnavi"
let reversed=''
for(let i=myName.length-1;i>=0;i--){
reversed=reversed+myName[i]
}
console.log(reversed)

//let val="Vaishnavi"
//let reverse=val.split('').reverse().toString()
//let reverse=val.split('').reverse().join('')
//console.log(reverse)

let dataValue="Welcome to Testleaf for Playwright"
//Welcome
//to
//Testleat
//for
//Playwright
console.log(dataValue.split(''))
let splitValue=dataValue.split('')

    for(let i=0;i<=splitValue;i++){
     console.log(splitValue[i])
    }
