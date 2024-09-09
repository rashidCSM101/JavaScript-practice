// const cars = ["Saab", "Volvo", "BMW"];

// cars.forEach((val)=> {
//     console.log(val);
// })

// function printMe(value) {
//     console.log(value);
// }
// cars.forEach(printMe)


// let myArray = [
//     "apple",
//     "banana",
//     "cherry",
//     "date",
//     "elderberry",
//     "fig",
//     "grape",
//     "honeydew",
//     "ice cream",
//     "jackfruit",
//     "kiwi",
//     "lemon",
//     "mango",
//     "nectarine",
//     "orange"
// ];

// myArray.forEach((key,value ,arr)=>{
//     console.log(`${key} =>${value}`);  
//     // console.log(key,value,arr);  
// })
const arr = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Alice', age: 20 },
    { id: 5, name: 'Mike', age: 40 },
    { id: 6, name: 'Sarah', age: 28 },
    { id: 7, name: 'Tom', age: 32 },
    { id: 8, name: 'Lily', age: 22 },
    { id: 9, name: 'David', age: 38 },
    { id: 10, name: 'Emily', age: 26 }
  ];
 
  arr.forEach((item)=>{
    console.log(item.id, item.name, item.age);
    
  })