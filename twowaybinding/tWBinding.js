
let form = document.querySelector(".form")
let input = document.querySelectorAll("input")
let card = document.querySelector(".card")

form.addEventListener("submit", function(data){
    data.preventDefault()

    let name = input[0].value
    let email = input[1].value
    let age = input[2].value
    let roll = input[3].value
    let url = input[4].value


    card.innerHTML = `
    <h1>${name}</h1>
    <p>${email}</p>
    <p>${age}</p>
    <p>${roll}</p>
    <p>${url}</p>

    `;
console.log(card)
});