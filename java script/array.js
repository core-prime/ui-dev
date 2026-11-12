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

let filteredFruits = fruits.filter(fruit => fruit !== 'apple');
console.log("filteredFruits:", filteredFruits);

let hasApple = fruits.includes('apple');
console.log("hasApple:", hasApple); // true

fruits.sort();
console.log("sortedFruits:", fruits);

// arrays objects

let fruitData = [
    {
        id: 1,
        fruit: "Orange",
        size: "Medium",
        color: "Orange"
    },
    {
        id: 2,
        fruit: "Apple",
        size: "Medium",
        color: "Red"
    },
    {
        id: 3,
        fruit: "mango",
        size: "Medium",
        color: "Red"
    }
];

let foundFruit = fruitData.find(fruit => fruit.id === 2);
// document.write(foundFruit);
console.log("foundFruit", foundFruit);
console.log("ghj", foundFruit);

let foundFruitData = fruitData.find(fruit => fruit !== "apple");

console.log("foundFruitData", foundFruitData);

let array = [8, 9, 3, 2, 5, 12, 1];

let x = array.reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log("ghjk", x);

let arr2 = array.sort();
console.log("sort", arr2);

let sortedArrAsc = array.sort((a, b) => a - b); // Sort the array numerically in asc
console.log("sortNumerical", sortedArrAsc);

let sortedArrDsc = array.sort((a, b) => b - a); // Sort the array numerically in desc
console.log("sortNumerical", sortedArrDsc);