// singleton -> Object.create

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "Pagol",
    "full name": "Paglir Pagol",
    [mySym]: "myKey1",
    age: 18,
    location: "Kolkata",
    email: "pagol@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
}

/* console.log(JSuser.email);
console.log(JSuser["lastLoginDays"]);
console.log(JSuser["full name"]);
console.log(JSuser[mySym]);

console.log(typeof mySym);
console.log(typeof JSuser[mySym]); */

/* JSuser.email = "susomoy@pagol.com"
console.log(JSuser);
Object.freeze(JSuser); // after freezing values can't be changed
JSuser.email = "pagol@susomoy.com"
console.log(JSuser["email"]); */

JSuser.greeting = function() {
    console.log("Hello JS user");
}

JSuser.greeting2 = function() {
    console.log(`Hey JS user, ${this.name}`);
}

console.log(JSuser.greeting);
console.log(JSuser.greeting());
console.log(JSuser.greeting2());
