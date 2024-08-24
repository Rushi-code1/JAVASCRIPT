// singleton 
Object.create({name : "rushi"})


// object literals
const mySym = Symbol("key1")
const JsUser = {
    name : "Rushi",
    "full name": "Rushikesh Deshmukh",
    [mySym] : "My Key1",
    age: 21,
    location : "Pune",
    email : "rd12006789@gmail.com",
    isLoggedIn : false,
    lasrLoginDayas:["MOnday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "ahssdjfk.com"
// Object.freeze(JsUser)


let newfunc = function(){
    console.log("hello user")
}

console.log(newfunc)
 // Object Part 2 


 


