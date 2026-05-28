// CallBack Function 
// ak function ke parameter me function pass hou tou os function ko callback function kehte he
function callback(intro){
    console.log(intro)
}
callback(function(){
    console.log("my Name is sanaullah siddiqui")
})

// Promise

let pro = new Promise(function(res, rej){
    setTimeout(()=>{
        let time = Math.floor(Math.random()*10)
        if(time >5) res("Resolve : " + time)
            else rej("rejected : " + time)
    }, 3000)
})

pro.then(function(val){
    console.log(val)
}).catch(function(val){
    console.log(val)
})

// async 
// jab data ya value ayege tou ye code chalega iske leye async use hota he 
async function async(data) {
    try{
    let ayc = await pro
    console.log(ayc)
    }catch(err){
        console.log(err)
    }
    
}
async()