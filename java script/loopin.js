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