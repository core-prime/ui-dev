// 1. String concatenation with '+'
console.log("10" + 5);
// Output: "105"
// Explanation: The '+' operator prioritizes string concatenation when one operand is a string.

// 2. Implicit conversion with '-'
console.log("10" - 5);
// Output: 5
// Explanation: The '-' operator forces numeric conversion of "10".

// 3. Implicit conversion with '*'
console.log("6" * 2);
// Output: 12
// Explanation: Multiplication forces numeric conversion of "6".

// 4. Implicit conversion with '/'
console.log("20" / 4);
// Output: 5
// Explanation: Division forces numeric conversion of "20".

// 5. Addition with boolean 'true'
console.log(10 + true);
// Output: 11
// Explanation: 'true' is implicitly converted to 1.

// 6. Addition with boolean 'false'
console.log(10 + false);
// Output: 10
// Explanation: 'false' is implicitly converted to 0.

// 7. String concatenation with boolean
console.log("5" + true);
// Output: "5true"
// Explanation: The '+' operator converts 'true' to string "true".

// 8. Subtracting from a non-numeric string
console.log("hello" - 2);
// Output: NaN
// Explanation: "hello" cannot be parsed as a number, producing Not-a-Number (NaN).

// ==========================================
// LEVEL 2: EXPLICIT CONVERSION PROGRAMS
// ==========================================

// 1. Convert "100" into a number and add 50.
let num1 = Number("100") + 50;
console.log(num1);
// Output: 150

// 2. Convert 25 into a string and concatenate it with " students".
let str1 = String(25) + " students";
console.log(str1);
// Output: "25 students"

// 3. Convert "45.89" into an integer using parseInt().
let intVal = parseInt("45.89");
console.log(intVal);
// Output: 45

// 4. Convert 0, 1, an empty string (""), and "Hello" into Boolean values.
console.log(Boolean(0));       // Output: false
console.log(Boolean(1));       // Output: true
console.log(Boolean(""));      // Output: false
console.log(Boolean("Hello")); // Output: true

// 5. Given let age = "20"; convert age to a number and calculate age after 5 years.
let age = "20";
let ageIn5Years = Number(age) + 5;
console.log(ageIn5Years);
// Output: 25

// ==========================================
// LEVEL 3: FIND THE OUTPUT
// ==========================================

// 1. Number conversion mixed with string concatenation
console.log(Number("10") + "5");
// Output: "105"

// 2. Numeric addition after explicit conversion
console.log(Number("10") + Number("5"));
// Output: 15

// 3. Explicit string conversion concatenated with number
console.log(String(10) + 5);
// Output: "105"

// 4. Non-empty string boolean evaluation
console.log(Boolean("false"));
// Output: true (Any non-empty string is truthy)

// 5. Zero boolean evaluation
console.log(Boolean(0));
// Output: false

// 6. Explicit boolean-to-number addition
console.log(Number(true) + Number(false));
// Output: 1 (1 + 0)

// 7. Float truncation via parseInt added to integer
console.log(parseInt("12.8") + 2);
// Output: 14 (12 + 2)

// 8. Loose equality type coercion
console.log("10" == 10);
// Output: true

// 9. Chained equality comparison
console.log("10" == 10 == 10);
// Output: false ("10" == 10 evaluates to true -> true == 10 evaluates to 1 == 10 -> false)

// 10. Failed explicit number conversion
console.log(Number("abc"));
// Output: NaN

// ==========================================
// LEVEL 4: PRACTICAL CODING CHALLENGES
// ==========================================

// Challenge 1
let a = "25";
let b = "15";
let sum = Number(a) + Number(b);
console.log(sum);
// Output: 40

// Challenge 2
let price = "499";
let total = Number(price) + 50;
console.log(total);
// Output: 549

// Challenge 3
let numToConvert = 123;
let convertedStr = String(numToConvert);
console.log(typeof convertedStr);
// Output: "string"

// Challenge 4
let strNum = "150";
let isGreater = Number(strNum) > 100;
console.log(isGreater);
// Output: true

// Challenge 5: Explanation
// The output of the following code is "105" because the '+' operator is used with a string and a number. In JavaScript, when one of the operands is a string, the other operand is converted to a string as well, resulting in string concatenation rather than numeric addition.