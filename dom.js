// let h1 = document.querySelector("h1")

// h1.innerText = "Siddiqui"
// console.log(h1)

let a = document.querySelector("a")
a.href = "https://www.shamsifytools.com"
console.log(a)


let h1 = document.createElement("h1");
h1.textContent = "Hello Sana Ullah Siddiqui"
document.querySelector("body").append(h1);
console.log(h1)


// Problem Solving 

// Q1:  Select all <li> elements and print their text using a loop.


let li = document.querySelectorAll('li');

li.forEach(function(val) {
    console.log(val.innerText)
})

// Q2: Select a paragraph and replace its content with:
// {
    // <p>Updated</p>
// }

let p = document.querySelector('p')
p.innerHTML = 'ullah'

// Q3:  how do you get the src of an image using Javascript?

let img = document.querySelector('img')
console.log(img.getAttribute('src'))

// Q4
let li1 = document.querySelector('li')

li1.setAttribute("title", "first li")

// Q5  
// what does createElement() do? what's returned ?

let h1 = document.createElement('h1')
console.log(h1)