let str = "JavaScript";
let sentence = "Welcome to HTML and programming";

// 1. Find the length of a string
console.log("1. Length:", str.length);

// 2. Convert a string to uppercase
console.log("2. Uppercase:", str.toUpperCase());

// 3. Convert a string to lowercase
console.log("3. Lowercase:", str.toLowerCase());

// 4. Extract the word "Java" from "JavaScript"
console.log("4. Extract:", str.substring(0, 4));

// 5. Replace "HTML" with "CSS" in a string
console.log("5. Replace:", sentence.replace("HTML", "CSS"));

// 6. Split a sentence into words
let wordsArray = sentence.split(" ");
console.log("6. Split words:", wordsArray);

// 7. Remove extra spaces using trim()
let padded = "   Hello World   ";
console.log("7. Trimmed:", padded.trim());

// 8. Reverse a string
let revStr = str.split("").reverse().join("");
console.log("8. Reversed:", revStr);

// 9. Check whether a string is a palindrome
let testWord = "madam";
let isPalindrome = testWord === testWord.split("").reverse().join("");
console.log("9. Is palindrome:", isPalindrome);

// 10. Count vowels in a string
let vowels = str.match(/[aeiou]/gi);
console.log("10. Vowel count:", vowels ? vowels.length : 0);

// 11. Count consonants in a string
let consonants = str.match(/[^aeiou]/gi);
console.log("11. Consonant count:", consonants ? consonants.length : 0);

// 12. Count spaces in a sentence
let spaceCount = sentence.split(" ").length - 1;
console.log("12. Space count:", spaceCount);

// 13. Find the first character of a string
console.log("13. First char:", str.charAt(0));

// 14. Find the last character of a string
console.log("14. Last char:", str.charAt(str.length - 1));

// 15. Count occurrences of a specific character in a string
let charToFind = "a";
let charCount = str.split(charToFind).length - 1;
console.log(`15. Count of '${charToFind}':`, charCount);

// 16. Find the frequency of a word in a sentence
let doc = "apple banana apple orange apple";
let wordToFind = "apple";
let wordFrequency = doc.split(" ").filter(w => w === wordToFind).length;
console.log(`16. Frequency of '${wordToFind}':`, wordFrequency);