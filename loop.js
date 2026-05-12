
// for ( let i = 0; i=>10; i++){
//     console.log("Running for Loop")
// }

// while loop
// let e = 1
// while(e < 30){
//     console.log("Running While Loop" ,e)
//     e++
// }

// Q1: Print numbers from 1 to 10 using a for loop.

// for (let i = 0; i <=10 ; i++){
//     console.log("Count", i)
// }

// Q2: Print numbers from 10 to 1 using a while loop.

// let i = 11;
// while(i  >0){
//     i--
//     console.log("Count", i)
// }

// Q3:  Print even numbers from 1 to 20 using a for loop.

// for (let i = 1; i <=20 ;  i++ ){
//     if(i%2 ===0){
//         console.log("even" ,i)
//     }
// }

// Q4: Print odd numbers from 1 to 15 using a while loop.
// for ( let i = 1; i <=15 ; i++){
//     if (i %2 !== 0 ){
//         console.log("odd", i)
//     }
// }


// Q5:  Print the multiplication table of ( i.e., 5*1 = 5)

for (let i = 1; i <=50 ; i++){
    if ( i%5 === 0 ){
        console.log("5*", i/5 ,"=", i)
    }
}

// Q6: Find the sum of numbers from 1 to 100 using a loop.
let sum = 0
for (let i = 0 ; i <=100 ; i++){
    sum = sum +i
}
console.log(sum)
// Q7: Print all numbers between 1 to 50 that are divisible by 3.
for (let i=0 ; i <=50 ; i++){
    if (i%3 === 0){
        console.log(i)
    }
}

// Q8: Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let val = prompt ( "give a number and showed odd or even")
// for ( let i =0; i<=val; i++){
//     if(i%2 ===0){
//         console.log(`${i} is even`)
//     }else (
//         console.log(`${i} is odd`)

//     )
// }


//Q9: Count how many numbers between 1 to 100 are divisble by both 3 and 5.

// for (let i  = 0; i<=100; i++){
//     if(i%3 === 0 ){
//         console.log(`divisible by 3: ${i}`)
//     }else if(i%5 === 0){
//         console.log(`divisible by 5: ${i}`)
//     }
// }

// Q10: Stop at first multiple of 7
// write a loop from 1 to 100 that: 
// . prints each number 
// . stops completely when it finds the first number divisible by 7

for (let stop = 1; stop < 10; stop++){
    if(stop % 7 === 0){
        break;
    }
    console.log(stop)
} 