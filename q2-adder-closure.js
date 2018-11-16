// Question 2 (adder closure)

const adder = num => num2 => num + num2;
console.log("Adder function");
console.log("Adder(1)(2)", adder(1)(2));
console.log("Adder(14)(2)", adder(14)(2));

// Output:

// Adder(1)(2)
//  3
// Adder(14)(2)
//  16
