

// OOPS (object oriented Programming)

function CreateBusiness(name, business, employees) {
    return {
        name: name,
        business: business,
        employees: employees
    }   

}
CreateBusiness.prototype.company = "game"
let tools = new CreateBusiness("Shamsifytools", "tools", 1)
console.log()

