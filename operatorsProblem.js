// // Q1: Create two variables a and b and print:

// const { GiTrade } = require("react-icons/gi")

// // addition
// // subtraction
// // multiplication
// // division

// const a = 5
// const b = 20
// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)

// // Q2: Find the remainder when 25 is divided by 4.

// const reminder = 25%4
// console.log(reminder)
// // Ans:1

// // Q3: Calculate 2 power 5 using operator.
// const power = 2*5
// console.log(power)

// // Q 4:Take a number and check if it is even or odd using %.
// const check = 8
// if(check%3 === 0){
//     console.log("odd")
// }else{
//     console.log("even")
// }

// // Q5: Convert temperature from Celsius to Fahrenheit using operators.
// const temperature = (34*9/5)+32
// console.log(temperature)

// // Q6: Create a variable count = 10.
// // Add 5
// // Subtract 2
// // Multiply by 3

// const count = 10;
// console.log()


// let x = 10;
// let y = 20;

// if (x>5 && y <25){
//     console.log("A")
// }else{
//     console.log("B")
// }
// // ans: "A"


// let isAdmin = true;
// let isLoggedIn = false;

// if(isAdmin || isLoggedIn){
//     console.log("Access Granted")
// }else{
//     console.log('Access Denied')
// }

// let temp = 34
// if(!(temp<30)){
//     console.log("Hot")
// }else{
//     console.log("Pleasant")
// }

// let d = 0
// if (d){
//     console.log("Truthy")
// }else{
//     console.log("Falsy")
// }

// let score = 70;
// let grade = score >=90?"A" : score >=75 ?"B" : score >=60 ? "C" : "Fail";
// console.log(grade)

// let n = 5
// // let result = n++ ;
// console.log(n++)
// console.log(n++)

let likes = 50;
function likePost(){
    likes = ++likes
    console.log(likes)
}
likePost()

console.log(likes)