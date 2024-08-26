const staffsDetails = [
    { name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
  ];

// const lowToHigh = staffsDetails.sort((a, b) => a.salary - b.salary);
// console.log(lowToHigh);

const lowToHigh = staffsDetails.sort((a, b) => b.salary - a.salary);
console.log(lowToHigh);