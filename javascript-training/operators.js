/*
Toán tử so hoc: arithmetic
Toán tử gán: assignment
Toán tử so sánh: comparison
Toán tử logic: logical
*/


// Số học
const a = (1 + 2);
console.log(a);

// So sánh

const c = 2;
const b = 5;

if (c < b) {
    alert('Dung');
}

// Logic

if (c > 1 && b > 1) {
    alert('a va b lon hon 1');
}

const x = 5;
const y = 6;
let d = 10;
let e = 10;
let f = 5;

// Addition
const sum = x + y;

// Subtraction
const diff = x - y;

// Product
const product = x * y;

// Division
const quotient = x / y;

// Remainder
const remainder = y % x;

// Exponentiation
const power = x ** y;


// Unary operators
d = +d;
e = -e;
--f;

// Assignment operators
let assignmentResult = 4 * (d = e + 2);

// Comma Operator
let u = (1, 2 + 3, 4);

console.log(`${x} + ${y} =`, sum);
console.log(`${x} - ${y} =`, diff);
console.log(`${x} * ${y} =`, product);
console.log(`${x} / ${y} =`, quotient);
console.log(`${x} % ${y} =`, remainder);
console.log(`${x} ** ${y} =`, power);
console.log(`+${d} =`, d, `${e} =`, e);
console.log(`--${++f} =`, f);
console.log(`4 * (a = ${e} + 2) =`, assignmentResult);
console.log(`(1, 2 + 3, 4) =`, u);