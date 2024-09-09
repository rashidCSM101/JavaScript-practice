const staffsDetails = [
    { id: 1, name: "Jam Josh", age: 44, salary: 4000, currency: "USD" },
    { id: 2, name: "Justina Kap", age: 34, salary: 3000, currency: "USD" },
    { id: 3, name: "Chris Colt", age: 37, salary: 3700, currency: "USD" },
    { id: 4, name: "Jane Doe", age: 24, salary: 4200, currency: "USD" }
];


const result = staffsDetails.some((salary) => {
    return salary.salary > 3000;
})
console.log(result);
//imp 
