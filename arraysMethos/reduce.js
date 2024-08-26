const numbers = [1,3,4,5,6,7,8,9,10,11,12];

function sumOfNumbers(accumulator ,target) {
    return accumulator + target;
}

let result = numbers.reduce(sumOfNumbers);
console.log(result);