const accountId = 144553
let accountEmail = "pagol@google.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2;  // not allowed, as it is declared as 'const'

accountEmail = "pc@lpt.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scopre and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
