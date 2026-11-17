///////////////// object //////////////////


let name = ['das', 'hari']//#endregionlast
let student = {
  name: 'das',
  rollno: 12
}

console.log(student.name)

let student1 = {
  name: "Rahul",
  age: 22,
  course: "MERN Stack"
};

console.log(student);

//accessing
console.log(student.name); //dot notation
console.log(student["age"]); //bracket notation

//adding
student.city="london"
console.log(student);

//updating
student.age=23
console.log(student);

//delete
delete student.age
console.log(student);

// nested object
let student2 = {
    name: "Ansalna",
    age: 25,
    address: {
        city: "Kochi",
        state: "Kerala"
    }
};

console.log(student2.address.city);


// object destructuring
let { name: name1, age } = student2;
console.log(name);
console.log(age);


// spread operator
let person3 = {
    name: "Ansalna",
    age: 25,
    addres: "fghjkl"
};

let person4 = {
    city: "Kochi",
    country: "India"
};

let newPerson = {
    ...person3,
    ...person4,
    value: "fghj"
};

console.log(newPerson);

// Looping Through Object
let car = {
    brand: "Toyota",
    model: "Innova",
    year: 2023
};

for (let key in car) {
    console.log(key, car[key]);
}

let user = {name: "John", age: 25};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));