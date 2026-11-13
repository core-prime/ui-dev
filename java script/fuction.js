// function greet(){} //function declaration
// code execution 

// greet() //function call


function greet(){ //parameter
    console.log("hello world")
}


// console.log(a) //error a is not defined
greet() //arguments


function square(n){ //single parameter
    console.log(n*n)
}
square(6) //argument

function add(a,b){
    console.log(a+b);// multipel parameter
}
add(7,4)

function sub(a,b){
    console.log(a-b);// multipel parameter
}
sub(7,4)

function mul(a,b){
    console.log(a*b);// multipel parameter
}
mul(7,4)

function div(a,b){
    console.log(a/b);// multipel parameter
}
div(7,4)

const add1=(a,b)=>{
    console.log(a+b);// Arrow function
}
add1(7,4)

const sayhello = function(){
    console.log("hello world");
};
sayhello();

function welcome(name="guest"){
    console.log("welcome" ,name)
}
welcome()
welcome('ramya')

// Rest Parameter

function sum(...numbers) {
    let total = 0;

    for (let a of numbers) {
        total += a;
    }

    return total;
}

console.log(sum(10, 20, 30, 89));

// spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]


console.log(arr3); // [1, 2, 3, 4, 5, 6]

function oe(num){
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
oe(4)
//prompt 2 number a,b button => function a+b