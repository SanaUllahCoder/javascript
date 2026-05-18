
let form = document.querySelector(".form")
let input = document.querySelectorAll("input")

form.addEventListener("submit", function(dts){
    dts.preventDefault()
    console.log(input[0].value)
    console.log(input[1].value)
    console.log(input[2].value)
    console.log(input[3].value)

})

