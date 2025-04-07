const mySym = Symbol('mykey1');

const JsUser = {
    name: "Hitesh", 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // Correctly using the symbol as a property
    age: 18, 
    location: "Jaipur", 
    email: "hitesh@google.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser);
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greeting()

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
JsUser.greetingTwo()