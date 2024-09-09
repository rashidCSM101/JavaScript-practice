const numbers = [1,3,4,5,6,7,8,9,10,11,12];

// function sumOfNumbers(accumulator ,target) {
//     return accumulator + target;
// }

// let result = numbers.reduce(sumOfNumbers);
// console.log(result);

// const sumOfNumbers = numbers.reduce((acc, target) =>{
//     return acc + target;
// });
// console.log(sumOfNumbers);


// const flipCard = [
//     {userId : 1,userName:"Rashid" ,itemId :"p1", price : 3000},
//     {userId : 1,userName:"Rashid" ,itemId :"p1", price : 4000},
//     {userId : 1,userName:"Rashid" ,itemId :"p1", price : 7000},
//     {userId : 1,userName:"Rashid" ,itemId :"p1", price : 1000}
// ];



const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

const sum = staffsDetails.reduce((total,currentValue)=>{
    return total + currentValue.salary;
},0);      //! here we set the initial value of total is zero
console.log(sum);
