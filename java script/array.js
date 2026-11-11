let ages = [12, 48, 77];
let fruits = ['apple', 'banana', 'orange', 'kiwi'];
let numbers = [11, 22, 33, 44, 5];

console.log("length", numbers.length);

console.log(fruits[2]);
console.log("fruits", fruits);

let newnumbers = numbers.slice(1, 5);
console.log("new array", newnumbers);

let newarray = fruits.slice(0, 2);
console.log("new", newarray);

fruits.splice(1, 3, 'item1', 'nikil', 'shik');
console.log(fruits);





fruits.push('grape', 'm');
console.log(fruits);
// fruits: ['apple', 'banana', 'orange', 'grape']

fruits.pop();
console.log(fruits);
// lastFruit: 'grape', fruits: ['apple', 'banana', 'orange']

fruits.unshift('kiwi');
console.log(fruits);
// fruits: ['kiwi', 'apple', 'banana', 'orange']

fruits.shift();
console.log("fruits", fruits);
// FirstFruit: 'kiwi', fruits: ['apple', 'banana', 'orange']

let bananaIndex = fruits.indexOf('grape');
console.log("bananaIndex", bananaIndex);
// bananaIndex: 1

let moreFruits = ['grape', 'watermelon'];
let combinedFruits = fruits.concat(moreFruits);
console.log("combined fruits", combinedFruits);
// combinedFruits: ['apple', 'orange', 'grape', 'watermelon']