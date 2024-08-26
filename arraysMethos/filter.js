const numbers = [33,65,5,43,2,1,334,56];

const isEven = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(isEven);