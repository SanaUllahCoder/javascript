// class Game{
//     constructor(name, popularity, viral){
//         this.name = name,
//         this.popularity = popularity,
//         this.viral = viral

//     }
//     data(){
//         console.log("Games", this.name, this.popularity, this.viral)
//     }
// }

// let game = new Game("freefire", "most popular", 'yes')
// let game1 = new Game("candycrush", "most popular", 'yes')
// let game2 = new Game("freefire", "most popular", 'yes')
// console.log(game1)
// game.data()


// class Practice{
//     constructor(name, age, gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
//     practiceData(){
//         console.log(`My Name is ${this.name}, and I am ${this.age}. Gender ${this.gender}`)
//     }
// }


// let practice1 = new Practice("Sana Ullah Siddiqui", 19 , "Male")
// let practice2 = new Practice("Zumar Hadiya", 23, "Female")
// console.log(practice1)
// practice1.practiceData()

// class Practices{
//     constructor(name, age, gender){
//         name 
//         age 
//         gender 
//     }
//     practiceData(){
//         console.log(`My Name is ${name}, and I am ${age}. Gender ${gender}`)
//     }
// }


// let practices1 = new Practices("Sana Ullah Siddiqui", 19 , "Male")
// let practices2 = new Practices("Zumar Hadiya", 23, "Female")
// console.log(practices1)
// practices1.practiceData()


class  Ids{
    constructor(name, age, username){
        this.name = name
        this.age = age
        this.username = username
    }
    write(text){
        let h1 = document.createElement("h1")
        h1.textContent = `${this.name} : ${text}`
        document.body.appendChild(h1)
    }
}

class Admin extends Ids{
    constructor(name, age, username){
        super(name, age, username)
        this.role = "admin"

    }
    
    remove(){
        document.querySelectorAll("h1").forEach(function(data){
            data.remove()
        })
    }
}

let ids1 = new Ids("Sana Ullah Siddiqui" , 19, "sana")
let admin1 = new Admin("SanaUllah", 19, "admin")
ids1.write('heee')
// Problems 
// 1.

// Person class banao:

// name
// age

// Ek method banao introduce() jo print kare:

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     personData() {
//         console.log(`My name is ${this.name}, and i am ${this.age} years old`)
//     }
// }

// let Person1 = new Person("Sana Ullah Siddiqui", 19)
// let Person2 = new Person("Ashfaq", 20)
// Person1.personData()


// 2.
// Student class:
// name
// marks
// Method:
// result() → agar marks >= 50 ho tou "Pass" warna "Fail"

// class Student {
//     constructor(name, marks) {
//         this.name = name
//         this.marks = marks

//     }
//     result() {
//         let marks = this.marks
//             if (marks >= 50) {
//                 console.log("Pass")
//             } else { console.log("Fail") }

        
//         // console.log(`My Name is ${this.name}, and i am ${this.marks} years old.`)
//     }
// }

// let studentMarks = new Student("Sana Ullah Siddiqui", 3)
// let studentMarks1 = new Student("Sana Ullah Siddiqui", 64)

// studentMarks.result()
// studentMarks1.result()


// 3. BankAccount class:
// name
// balance
// Methods:


// class BankAccount  {
//     constructor(name, balance) {
//         this.name = name
//         this.balance = balance   
//     }
//     deposite(amount){
//          this.balance = this.balance + amount
//     }
//     withdraw(amount){
//         this.balance = this.balance - amount
//     } 
//     showBalance(){
//         console.log("Balance" , this.balance)
//     }
    
// }

// let user1 = new BankAccount("Sana Ullah Siddiqui", 0)


// user1.deposite(3)
// user1.withdraw(300)
// user1.showBalance()