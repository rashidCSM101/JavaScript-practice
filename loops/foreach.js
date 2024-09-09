const cars = ["Saab", "Volvo", "BMW"];

cars.forEach((val)=> {
    console.log(val);
})

function printMe(value) {
    console.log(value);
}
cars.forEach(printMe)