
let ul = document.createElement('ul')
document.body.append(ul)

function todoApp(){
    let name = document.getElementById('name')
    let age = document.getElementById('age')

    let li = document.createElement('li')
    li.innerText = name.value
    li.innerText = age.value

    li.append(name.value)
    li.append(age.value)
    ul.appendChild(li)
    console.log(li)
    
}