// Easy comparisons

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// ***** comparison of different entities *****

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check ===

console.log("2" === 2); // false ; because ये datatype को check है ।


// Summary:-

// Rule:- Two different datatypes को compare करना Avoid करें , 
// because of unpredictible results or errors.
//  javascript में comparison >/< and  equality check == दो different चीज़े हैं।