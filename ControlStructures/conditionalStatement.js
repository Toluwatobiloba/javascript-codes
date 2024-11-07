// control structure in js is essential for controlling the flow of 
// execution in your code. they allow you to dictate on how your
// programme should respond based on conditions.

// 1. conditional statement
// conditional statement executes a block of code if the specified 
// condition is true or false.

// a. If statement
let temperature = 30;

if( temperature > 25) {
    console.log('it is a hot day!')
} else {
    console.log('it is a cold day')
}

const isAdmin = false;
const isSuperUser = false;

if ( isAdmin || isSuperUser) {
    console.log("you can have access to the app")
} else {
    console.log("you are not allow to access the app")
}


// write if statement that checks if someone has paid school
// fees and also have good health before the person can
// have access to the class, or else the person should go back home

// your output should be: welcome to the class or go back home 

const hasPaid = true;
const goodHealth = true;

if ( schoolFees && goodHealth) {
    console.log(" can have access to the class")
} else {
    console.log("go back home")
}