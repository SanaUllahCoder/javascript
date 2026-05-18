
// // let p = document.querySelector('p')

// // p.addEventListener("dblclick", function(){
// //     p.style.color = 'yellow'
// // })


// // let inp = document.querySelector('input')
// // inp.addEventListener('input', function(data){
// //     if(data.data !== null){
// //     console.log(data.data)
// //     }
// // })


// // let selected = document.querySelector('select')
// // let slt = document.querySelector("#slt")
// // selected.addEventListener('change', function(data){
// //     console.log(data.target.value)
// //     slt.textContent = `${data.target.value} Device Seleted`
// // })

// let type = document.querySelector('h1')
// window.addEventListener('keydown', function (data) {
//     if (data.key === "") {
//         type.textContent = "SdfaPC"

//     }else{
//         type.textContent = data.key

//     }
// })

let file = document.querySelector("#file")
let showName = document.querySelector("#showname")

showName.addEventListener("click", function(){
    file.click()
})

file.addEventListener('change' ,function(data){
    console.log(data.target.files[0].name)
    showName.textContent = data.target.files[0].name
})