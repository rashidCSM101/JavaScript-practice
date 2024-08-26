// // add email key
// const key ='email';
// const person = {
//     name: 'Thapa',
//     age: 25,
//     city: 'Bangalore',
//     hobbies:['crickter','beng','jh']
// }
// person[key] ='sayedrashid@gmail.com';
// // console.log(person.hobbies);
// // console.log(person.hobbies[2]);
// // console.log(person);
//
// for (const key in person) {
//   console.log(` ${key}: ${person[key]}`);
// }



// const  person ={
//     Name: 'Rashid',
//     lastName: 'Hussain',
//     Age: 24,
//     City: 'Bangalore',
//     Hobbies: ['Reading', 'Cricket', 'Coding']
// }
// console.log(person.lastName)
//
// const person = new Object();
// person.name = 'Rashid';
// person.lastName = 'Hussain';
// person.age = 24;
// person.city = 'Bangalore';
// person.hobbies = ['Reading', 'Cricket', 'Coding'];
//
//
// // create a copy of person object
// const personCopy = person;
// person.city="Larkana"
// console.log(personCopy)
// console.log(person)
// console.log(person.lastName);

// console.log(person['name']);




// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//
//     }
// };

const  person ={
    Name: 'Rashid',
    lastName: 'Hussain',
    Age: 24,
    City: 'Bangalore',
    Hobbies: ['Reading', 'Cricket', 'Coding']
}
person.nationality ="Pakistani";
delete person.Age
console.log(person)

