 let score = "rishabh"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN (not a number)
// true => 1; false => 0

let isLoggedIn = "rishabh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => flase
// "" => false 
// "rishabh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ******************************  OPERATIONS  *******************************************************************************

let value = 3
let negValue = -value
console.log(negValue);

/*console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 3);*/
    
let str1 = "Jai"
let str2 = " Shree Ram"
let str3 = str1 + str2
console.log(str3); // basic examples //

// tricky operations //
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(3 + 4 * 5 % 3); //not recommended; instead use paranthesis 

console.log(true);// true => true
console.log(+true); // +true => 1 , true+ => error;
console.log(+""); // +"" => 0

let num1, num2, num3
num1 = num2 = num3 = 2+2 //not recommended
console.log(num1);

let gameCounter =100
++gameCounter;
console.log(gameCounter);

// ++gameCounter => 101
// gameCounter++ => 101

// study Prefix and Postfix operations ++x , x++

// link to study primitiveOperations