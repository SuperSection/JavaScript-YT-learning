// singleton -> Object.create

// object literals

const mySym = Symbol("key1");

const JSuser = {
  name: "Pagol",
  "full name": "Paglir Pagol",
  [mySym]: "myKey1",
  age: 18,
  location: "Kolkata",
  email: "pagol@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

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

/* JSuser.greeting = function() {
    console.log("Hello JS user");
}

JSuser.greeting2 = function() {
    console.log(`Hey JS user, ${this.name}`);
}

console.log(JSuser.greeting);
console.log(JSuser.greeting());
console.log(JSuser.greeting2()); */


/* ------------------------------------------------------------- */

const wpUser = new Object(); // singleton object
const wpUser2 = {}; // non-singleton object

wpUser.id = "123abc";
wpUser.name = "soumo";
wpUser.isLoggedIn = true;

console.log(wpUser);

const regularUser = {
  email: "0074gd",
  username: {
    fullname: {
      firstname: "paglir",
      lastname: "pagol",
    },
  },
};

// console.log(regularUser.username.fullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { obj1, obj2 };
console.log(obj4);

const obj5 = Object.assign(obj1, obj2); // all the values are getting stored in the first object
console.log(obj5);
console.log(obj1 === obj5); // true

const obj6 = Object.assign({}, obj1, obj3); // using empty object as the first argument to store all the values of other given objects
console.log(obj6);
console.log(obj6 == obj1); // false

const obj7 = {...obj2, ...obj3}
console.log(obj7);


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "p@love.com"
    },
]

const getEmail = users[1].email
console.log(getEmail);

console.log(Object.keys(wpUser));
console.log(Object.values(wpUser));
console.log(Object.entries(wpUser));


console.log(wpUser.hasOwnProperty('isLoggedIn'));
console.log(wpUser.hasOwnProperty('username'));
