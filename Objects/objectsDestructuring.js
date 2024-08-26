// Array of objects
let users = [
    {
        name: 'john',
        age: 12,
        gender: 'male'
    },
    {
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        name: 'julie',
        age: 20,
        gender: 'trans'
    }
];



console.log(users);
const [{name:userFirstName},,{gender:user3rdGender}]=users;
// console.log(userFirstName,user3rdGender);
// const user = { 
//     'name': 'Alex',
//     'address': '15th Park Avenue',
//     'age': 43,
//     //! nested object
//     'department':{
//         'name': 'Sales',
//         'Shift': 'Morning',
//         //! nested in side nested object
//         'address': {
//             'city': 'Bangalore',
//             'street': '7th Residency Rd',
//             'zip': 560001
//         }
//     }
// }

// const {department: {address: {city}}}=user;
// console.log(department);
// console.log(address);
// console.log(city);
