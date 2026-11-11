let name = "Ansar";
let name2 = "hello";
let sample = 'gbhnjkl';

console.log(name2.length);
console.log("uppercase", name2.toUpperCase());
console.log("Lowercase", name2.toLowerCase());





let text = "   Hello world";
console.log(text);
console.log("Trim", text.trim());

let text2 = "Welcome to programming";
let text3 = "hello,hai,hh,oo"; //hello hai hh
console.log("Slice", text2.slice(4, 8));
console.log("Substring", text2.substring(0, 8));

let str = "javascript";
console.log(str.slice(-4));
console.log(str.substring(-4));


console.log("replace", text2.replace("to", "to the"));
console.log("replace all", text3.replaceAll(",", " "));


console.log("includes", text2.includes("o"));
console.log("charat", text2.charAt(3));
console.log("indexof", text2.indexOf("m"));
console.log("lastindex", text2.lastIndexOf("m"));


let str3 = "hello world";

console.log("startswith", text.startsWith("Hello"));
console.log("Endswith", text.endsWith("ld"));

let str1 = "Hello";
let str2 = "world";


console.log("concat", str1.concat(" ", str2));
console.log("concat", str1 + str2);

const fruit = "apple mango OR";
console.log("split", fruit.split(" ")); // [apple, mango, OR]

let str7 = "hello";
console.log(str7.repeat(2)); // hello hello


let words = ["hai", "hello", "jj"];
console.log(words.join(" ")); // hello => heeloo => olleh =>olleh


// let letter = prompt("Enter a letter");

// if ("aeiouAEIOU".includes(letter)){
//     document.writeln("Vowel");
// } else {
//     console.log("Not a Vowel");
// }
