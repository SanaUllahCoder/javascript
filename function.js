// this is function expressionl
let fnc = function fncc(){
    return console.log("game")
}
console.log(fnc)

// rest operators 
function rest(...a){
    console.log(a)

}

rest(1,2,3,4,5,6,7,8,9)

function restt(a,b,c, ...d){
    console.log(a,b,c, d)

}

restt(1,2,3,4,5,6,7,8,9)


// Fist Class function 

function fcf(val){
    val()

}

fcf( function fcff(){
    console.log("First Class Function")
})

// High Order Function 

function hof(){
    return(
        function hoff(){
            console.log("High Order Function")
        }
    )

}
hof()()


// Problem solving
function value(...scores){
    let total = 0;
    scores.forEach(function(val){
        total =  total + val
        console.log(val)
    });
    return total;
}

value(1,2,3,4,5,3,2,3,4)

function checkAge(age){
    if(age<=18) return "Too Many";
    return"Allowed"
}

console.log(checkAge(4))

