// What will be the result of the following codes:

// var a = isNaN(‘11’);

// var a = isNaN(2-10);

// Explain your answers.


const a = isNaN("11") //it can be possible to 11string  to number thats why its a number 
console.log(a) // output : false

const b = isNaN(2-10) // number : -8
console.log(b) // output : false