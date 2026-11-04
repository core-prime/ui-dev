let username="admin"
let password="12345"
// let password=12345

let name=prompt("Enter username")
let pass=prompt("Enter password")

if(name===username&&pass===password){
    document.write("Login successful")
}else{
    alert("login failed")
}




// let q=prompt("Enter number")
// let b=prompt("Enter second")

let num1 = parseInt(prompt("enter first no"));
let num2 = parseInt(prompt("enter second no"));
let oper = prompt("enter operator");
let result;

if (oper === "+") {
    result = num1 + num2;
} else if (oper === "-") {
    result = num1 - num2;
} else {
    console.log("Invalid");
}

document.write(result);
console.log(result);

// first number = 34, second number = 45, operator = +