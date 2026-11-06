// brake
// continue
// return

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// print only odd numbers from 1 to 20 using continue

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Print numbers from 1 to 100 and stop at the first multiple of 17

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 17 === 0) {
        break;
    }
}