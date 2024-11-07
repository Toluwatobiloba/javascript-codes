// operators in js are special symbols that performs operations on one or more
// files in our js file system.

// 1. Arithmetic Operations
// addition
let sum = 5 + 3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder)

// 2. Assignment Operators
// These operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparison Operators
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5"); /* TRUE */

// strict Equal 
console.log(5 === "5"); /* FALSE */

// Not Equal
console.log(5 != "5"); /* 5 is not equal to 5 is false because the != and == accepts it as far as they look a bit alike */

// strict not Equal
console.log(5 !== "5"); /* 5 is not equal to 5 is true because the === and !== checks whether they are the same
 and when it sees they are not the same it accepts the fact that it's not true */

// not equal
console.log(5 != '5')
let o = 3
let k = 2

console.log(o != k)

// strict not equal
console.log(5 !== '5')
let m = "toluwanimi"
let e = 10
console.log(m !== e)

// Greater than
console.log(10 > 5) /* true */
let t = 12
let h = 10
console.log(t > h); /* false */

// Greater than
console.log(10 > 5); /* true */
let g = 12
let r = 10
let X = g + r
console.log(r > g); /* false */

// less than
console.log(3 < 2); /* false*/
let i = 12
let j = 10
let w = i - j
console.log(X < w) /* false */

// greater than and equal
console.log(4 >= 5);
let u = 6
let v = 6
console.log(u >= v);

// greater than and equal
console.log(4 >= 5);
let U = 6
let V = 6
let n = u * 2
console.log(U >= V);

let f = V - 3

console.log( n >= f)

// 4. Logical Operators
// These operators are used to combine or invert boolean values ( true or false ). The most common logical operators are:

// AND ('&&'): Returns true if both operands are true .
// OR ('||'): Returns true if at least one of the operands is true.         
// NOT ('!'): Inverts the boolean value (true becomes false and vice versa).

// Variable declarations using logical operators


// CONTINUATION Today Thursday 7th November 2024.

const hasDriverLicense = true;
const hadInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive)

// This means that the person must have the two i.e the Driver License and the Insurance before he can Drive

// The AND is very strict because the two must be true before it can return true but if anyone has false,it will return false

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter)

// || operator
const knowsHTML = false;
const knowCSS = true;
const canDesignWebsite = knowsHTML || knowCSS
console.log(canDesignWebsite);
 
const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccesPage)
 




