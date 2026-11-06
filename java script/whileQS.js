// Print numbers from 1 to 50
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

// Print all multiples of 5 between 1 and 100
let i = 1;
while (i <= 100) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Find the sum of all even numbers from 1 to 50
let i = 1;
let sum = 0;
while (i <= 50) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log("Sum of even numbers:", sum);

// Find the sum of all odd numbers from 1 to 50

let i = 1;
let sum = 0;
while (i <= 50) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}
console.log("Sum of odd numbers:", sum);

