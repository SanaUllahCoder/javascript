let arr = [1,2,3,4,4,3,5,7,4,2,5,6,7]
arr.push()
arr.pop()
arr.shift()
arr.unshift()


arr.slice(2,1)

console.log(arr.reverse())

let sort = arr.sort(function(a, b){
    return a - b;
})
let sort1 = arr.sort(function(b, a){
    return b- a;
})
console.log(sort)
console.log(sort1)


arr.forEach(function(val){
    console.log(val+5)
})


let filter = arr.filter(function(val){
    if(val>4) return true;
})

console.log(filter)

let reduce = arr.reduce(function(acc, val ){
    return acc + val
},0)

console.log(reduce) 

let find = arr.find(function(val){
    return val === 4
})

console.log(find)


let some = arr.some(function(val){
    return val >34
})

console.log(some)

// spread operator 
let arr1= [1,2,3,4,5,6,7,8]
let arr2 = [...arr1]
arr2.push(9)
console.log(arr2)


// Problem solving

// Q1:Extract only the middle 3 elements from this array
let items = [1,2,3,4,5,6]
let cut =items.slice(1,4)
console.log(cut)

// Q2: sort this array alphabetically and then reverse it: 
let names = ["sana", "wasiq", "zakir", "tahir"]
let reverse = names.sort().reverse()
console.log(reverse)

// Q3: use map()to square each number:
let square = [1,2,3,4]
let newarr = square.map(function(val){
    return val*val
})

console.log(newarr)

// Q4:  use filter () to keep numbers greater than 10;
let greater  = [4,34,21,4,64]
let newGreater = greater.filter(function(val){
    return val > 10;
})

console.log(newGreater)

// Q5: use reduce() to find the sum of this array
let reduced= [10,2,3,3,20,232,4,5654,3,5,4]
let newReduce = reduced.reduce(function(acc, val){
    return acc + val
})

console.log(newReduce)

// Q6: use find() to get the first number less than 10;
let findTen = [40,32,4,6,2,10,10,329,40]
let newFindTen = findTen.find(function(val){
    return val === 10
})
console.log(newFindTen)


// Q7: use some() to check if any student has scored below 35.
let someScored = [4,35,3,4,64,3,5,6,4433,5,5,4,3,]
let newSomeScored = someScored.some(function(val){
    return val <35;
})
console.log(newSomeScored)

// Q8:  use every() to check if all numbers are even:
let everyEven = [5,4,5,,3,22,65,3,2,543,2,4,6,8]
let newEveryEven = everyEven.every(function(val){
    return val %2 === 0
})
console.log(newEveryEven)