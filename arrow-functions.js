/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// NON - ES6
function addTwoNumbers1(a, b){
    return a+b;
}

let sum1 = addTwoNumbers1(5,7);
console.log(sum);
// Arrow Function With Parameters
const addTwoNumbers = (a,b) => {
    return a+b;
}
let sum2 = addTwoNumbers(7,2);
console.log(sum);
// Single Line Arrow Function With Parameters
// const addTwoNumbers2 = (a,b) => (a+b); - VALID
const addTwoNumbers2 = (a,b) => a+b;
// Implicit Returns
const saySomething = message => console.log(message);
saySomething('This is a sentance');

const sayHello = () => console.log('Hello');
sayHello();
// Returning Multiple Lines
const returnMultipleLines = () => {
    `<p>
        This is a multiline string !
    </p>`
}
console.log(returnMultipleLines());