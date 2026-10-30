//control stmts
//1.conditional stmt
//2.looping stmt
//3.jumb

//conditional

// if(condition){
//     // ex
// }

let age = 38
if (age >= 18) {
    console.log("adult");
    document.write("adult"+"<br>")
}

// if else
let age1 = 8;
if (age1 >= 18) {
    console.log("Adult");
    document.write("adult"+"<br>");
} else {
    console.log("minor");
    document.write("minor"+"<br>");
}

let number = 34;

if (number % 2 == 0) {
    console.log("even");
    document.write("even" + "<br>");
} else {
    console.log("odd");
    document.write("odd" + "<br>");
}

// ternary ? left(true):right(false)

// if else if
let mark = 75;

if (mark >= 90) {
    console.log("Grade A");
} else if (mark > 60) {
    console.log("Grade B");
} else if (mark > 30) {
    console.log("Grade C");
} else if (mark > 10) {
    console.log("Grade D");
} else {
    console.log("Fail");
}