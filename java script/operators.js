// Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000\

// assign
let x = 6
// console.log(x += 5); // x = x + 5 //6+5=11

console.log(x -= 2);  // x = x - 2
console.log(x *= 2);  // x = x * 2
console.log(x /= 2);  // x = x / 2


// //comparison
let g=10
let f="10"

console.log("== ",g==f); //true
console.log("===",g===f); //false
console.log("!=",5!='5'); //false
console.log("!==",6!==4); //true
console.log(">",10>5); //true
console.log(">=",9>=10); //false
console.log("<",4<12); //true
console.log("<=",4<=3); //false

// logical
// && || !
console.log("&&", true&&true); // true
console.log("&&", true&&false); // false
console.log("||", true||true); // true
console.log("||", true||false); // true
console.log("||", false||false); // false
console.log("!", true!=false); // true

//incre/decre
let m = 5;

console.log("++m", ++m); // 6
console.log(m++); // 6, but m becomes 7

console.log("m++", m++); // 7, but m becomes 8
console.log("m++", m++); // 8, but m becomes 9


console.log("m", m--); // 7, but m becomes 6
console.log("--m", --m); // 5

// console.log("m--", m--); // 6, but m becomes 5
// console.log("m--", m--); // 5, but m becomes 4

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
