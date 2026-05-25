

let obj = {
     age : 19,
     name: "Sana Ullah Siddiqui",
     myData : function(){
        console.log(this.name)
        console.log(this.age)

     }
}

obj.myData()

// call apply bind 

let obj1 = {
    name: "Sana Ullah Siddiqui"
}

function cab(){
    console.log(this)
}

cab.call(obj1)

// apply 
// only two variable except
let obj2 = {
    name: "Sana Ullah Siddiqui"
}
 function cab(a,b,c,d){
    console.log(this, a,b,c,d)
}

cab.apply(obj2, [1,2,3],3)