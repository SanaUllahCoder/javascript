// Create an object for a student with name, age, and isEnrolled.

let obj = {
    name: "Sana Ullah Siddiqui",
    age: 19,
    isEnrolled: true
}

// Can an object key be a number or boolean? Try this

let boln = {
    Boolean: true,
    35: "answer"
}
console.log(boln.Boolean)
console.log(boln[35])

// Q3: Access the value of " first name " from this output 

const user = {
    "first-name": "Sana Ullah",

}

console.log(user["first-name"])

// Q4: Given a dynamic key let key = "age", how will you access user{key}?
let key = "name"
const dynamic = {
    name: "Sana Ullah Siddiqui"
}
console.log(dynamic[key])


// Q5:  From the object below, print the latitude:
const location = {
    city: "Karachi",
    coordinate: {
        lat: 23.2,
        lng: 77.4
    }
}
console.log(location?.coordinates?.lat)
// console.log(lat)
// console.log(lng)

// Q6: destructure the kye "first-name" as a variable called firstName.

const dest = {
    "first-name": "Sana Ullah"
}

let { "first-name": firstName } = dest
console.log(firstName)

// Q7: use for-in to log all keys in this object:
const course = {
    title: "JavaScript",
    duration: "4 weeks"
}

for (let key in course) {
    console.log(key)
}

// Q 8:  use Object.entries() to print all key-value pairs as: 

// title: "JavaScript"
// duration: "5 weeks"

const entries = {
    title: "JavaScript",
    duration: "5 weeks"
}

Object.entries(entries).forEach(function(val){
    console.log(val[0], ":", val[1])
})


// Q9: 
const obj1 = {info:{ score: 90}};
const clone = {...obj1}
clone.info.score = 100;
console.log(obj1.info.score)


// Q10: 
const obj2 = {info: {score: 49}}
let newObj = JSON.parse(JSON.stringify(obj2))
newObj.info.score = 405
console.log(newObj.info.score)
console.log(obj2)
console.log(newObj)


// Q11: Rewrite this safely using optional chaining:
const person ={}
console.log(person?.profile?.name)

// Q12: use a variable to dynamically assign a property

const keyDyn = "role"
let keys = {
    name: "Sana Ullah Siddiqui",
    [keyDyn] : "Admin"
}

// console.log(key)
console.log(keyDyn)