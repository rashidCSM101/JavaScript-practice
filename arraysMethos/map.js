// const numbers = [33,65,5,43,2,1,334,56];
// function sumofNumbers  (accumulator){
//     return accumulator * accumulator;
// }

// const result = numbers.map(sumofNumbers);
// console.log(result);


const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];


function staffsName(names,index) {
    return `${names.name} ${index}`;
}
const staffs = staffsDetails.map(staffsName);
console.log(staffs);
