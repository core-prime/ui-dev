// Print numbers from 1 to 50
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

// Print all multiples of 5 between 1 and 100
i = 1;
while (i <= 100) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Find the sum of all even numbers from 1 to 50
i = 1;
let sum = 0;
while (i <= 50) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log("Sum of even numbers:", sum);

// Find the sum of all odd numbers from 1 to 50

i = 1;
sum = 0;
while (i <= 50) {
    if (i % 2 !== 0) {
        sum += i;
    }
    i++;
}
console.log("Sum of odd numbers:", sum);

// Print the squares of numbers from 1 to 10

i = 1;
while (i <= 10) {
    console.log(i * i);
    i++;
}

// Print the cubes of numbers from 1 to 10

i = 1;
while (i <= 10) {
    console.log(i * i * i);
    i++;
}

// Count how many numbers between 1 and 100 are divisible by 7

i = 1;
let count = 0;
while (i <= 100) {
    if (i % 7 === 0) {
        count++;
    }
    i++;
}
console.log("Total numbers divisible by 7:", count); // 14

// Print numbers divisible by both 3 and 5 between 1 and 100

i = 1;
while (i <= 100) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Find the average of numbers from 1 to 20

i = 1;
sum = 0;
count = 0;

while (i <= 20) {
    sum += i;
    count++;
    i++;
}

let average = sum / count;
console.log("Average:", average); // 10.5