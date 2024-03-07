const accountId = 144556
let accountEmail = "Rishabh@google.com"
var accountPassword = "123456"
accountCity = "NOwgong"

// accountId = 2 // Not allowed due to const keyword

accountEmail = "hc@hc.com"
accountPassword = "4458889"
accountCity = "Odisha" 
let accountState; // undefined print milega //

console.log(accountId);

/*
   Prefer not to use Var
   because of issue in block scope and functional scope.
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState ]);