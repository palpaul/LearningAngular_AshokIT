//1st way declaring array
let fruits: String[];
fruits = ["Mango", "Apple", "Banana"];
console.log(fruits);
//2nd way declaring array

let animal: Array<String>;
animal = ["Lion", "Monkey", "Tiger", "Rabbit"];
console.log(animal);

//heteriougenous array menas diff diff data type can store

//3rd way of declaring Array very important
let persons: Array<String | number>;
persons = ["Rahul", 28, "Sheelu", 25];
console.log(persons);

// if we ant to accept anytype of datatype in array then we have to use
// ANY okkk
//while declaring an array

let personAny: Array<any>;
personAny = ["Rahul", 28, "Sheelu", 25, true, 45.25];
console.log(personAny);
