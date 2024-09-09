const animals = ["cat","dog","fish","Zebra","sheep","gopher"];

// const search = function(string){
//     return string.length === 5;
// }
// const search = (string)=>{
//     return string.length === 5;
// }
// const result = animals.find(search);
// console.log(result);

// const result = animals.find((string)=>{
//     return string.length === 5;
// });
// console.log(result);


//imp REAL LIFE EXAMPLE 
const staffsDetails = [
    {id:1, name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    {id:2, name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    {id:3, name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    {id:4, name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  const result = staffsDetails.find((userId)=>{
    return userId.id === 2;
  })
  console.log(result);
  
