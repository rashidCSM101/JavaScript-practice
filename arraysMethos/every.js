// const myArray = [4,8,6,4,2,1,6,9,7,5,3,4,8];

// const result = myArray.every((x) =>{
//     return x%2 === 0;
// })
// console.log(result);


// Real world example
const staffsDetails = [
    {id:1, name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    {id:2, name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    {id:3, name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    {id:4, name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

  const result = staffsDetails.every((salary) =>{
    return salary.salary > 1000;
  })
  console.log(result);
  