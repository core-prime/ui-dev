for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let j = 10; j >= 1; i--) {
    console.log(i);
}
// document.write(j + '<br>');

// 1 - 10
// 10 - 1

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sum = 0;
for (let i = 10; i >= 1; i--) {
    sum += i;
}

console.log("sum", sum);

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 5 = ${i * 5}`);
}

// loopimg

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum); // 5050

let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`Factorial of ${n}:`, factorial); // 120


let n1 = 11;
let isPrime = n1 > 1;
for (let i = 2; i <= Math.sqrt(n1); i++) {
    if (n1 % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(`${n1} is prime:`, isPrime); // true

// reverse
let num = 123;
let originalNum = num;
let reversedNum = 0;
 for (let i=1; num>0;i++){
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
}
console.log(`Reversed number of ${originalNum}:`, reversedNum); // 321  


//  while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

let j=10;
while(j>=1){
    console.log(j);
    j--;
}

let num1 =1;
do{
    console.log(num1);
    num1++
}while(num1<=10);
