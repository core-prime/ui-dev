// 1. Write a function to find the sum of two numbers.
function sumTwoNumbers(a, b) {
    return a + b;
}

// 2. Write a function to check whether a number is even or odd.
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 3. Write a function to find the largest of three numbers.
function findLargestOfThree(a, b, c) {
    return Math.max(a, b, c);
}

// 4. Write a function to reverse a string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 5. Write a function to count vowels in a string.
function countVowels(str) {
    let matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}

// 6. Write a function to calculate factorial using recursion.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 7. Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// 8. Write a function to remove duplicates from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 9. Write a function to find the second largest number in an array.
function secondLargest(arr) {
    let unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique.length > 1 ? unique[1] : null;
}