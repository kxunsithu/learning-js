// Define a function called sayHello
// function sayHello() {
//     console.log("Hello!");
// }

// Call the sayHello function
// sayHello();

// Parameterized function to add two numbers
// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// let result = sum(5, 10);
// console.log(result);

// const sum = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(sum(5, 10));

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet("Mg Mg");

// const greetArrow = name => console.log(`Hello, ${name}!`);

// greetArrow("Aung Aung");

// const square = num => num * num;

// console.log(square(5));

// console.log(Math.random());


// Array manipulation example
// const numbers = [1, 2, 3];
// console.log(numbers);

// numbers.unshift(0);
// numbers.push(4);
// numbers.pop();
// numbers.shift();
// console.log(numbers);

// const scores = [10, 20, 30];
// console.log(scores);

// scores[0] = 25;

// console.log(scores); 

// Foreach loop example
// const fruits = ["apple", "banana", "orange"];

// console.log(fruits);

// fruits.forEach(
//     (x) => {
//         console.log(x); 
//     }
// );

// const newFruits = fruits.map(
//     (x) => {
//         return x + "s";
//     }
// );

// console.log(newFruits); 

// const numbers = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5];

// const evenNumbers = numbers.filter(
//     (x) => {
//         return x === 2 || x === 3;
//     }
// );

// console.log(evenNumbers);

// Object manipulation example
const person = {
    name: "John",
    age: 30,
    phone: "123-456-7890",
    email: "john@gmail.com"
};

person.age = 20;
person.address = "123 Main St";

console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.phone);
// console.log(person.email);

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["phone"]);
// console.log(person["email"]);

// const persons = [
//     {
//         name: "John",
//         age: 30,
//         phone: "123-456-7890",
//         email: "john@gmail.com"
//     },
//     {
//         name: "Jane",
//         age: 25,
//         phone: "987-654-3210",
//         email: "jane@gmail.com"
//     },
//     {
//         name: "Bob",
//         age: 35,
//         phone: "555-555-5555",
//         email: "bob@gmail.com" 
//     }
// ];

// console.log(persons[1].name);

// persons.forEach(
//     (person) => {
//         console.log(person);
//     }
// );