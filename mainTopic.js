
// lexical scopes 
function llS(){
    let a = 10;
    function llss(){
        console.log(a)
    }
}

// lls()

// closures
function cls(){
    let clors= 20
    return function clss(){
        console.log(20)
    }
}

let fnc = cls()
console.log(fnc)
fnc()