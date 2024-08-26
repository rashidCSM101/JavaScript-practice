
// function numberSearch(numbers, ...target) {
//     for (let i = 0; i < target.length; i++) {
//         numbers = numbers + target[i];
//     }
//     return numbers;
// }
// const ans = numberSearch(44,7,8,9,10,99);
// console.log(ans);
// console.log(`${array[ans]} is present: ${ans} index`);

// const numberSearch = (...target) =>{
//     let total = 0;
//     for (let i = 0; i < target.length; i++) {
//         total = total + target[i];
//     }
//     return total;
// }
// const ans = numberSearch(44,7,8,9,10,99);
// console.log(ans);


const numberSearch = function (...target) {
    let total = 0;
    for (let i = 0; i < target.length; i++) {
        total = total + target[i];
    }
    return total;
}
const ans = numberSearch(44,7,8,9,10,99);
console.log(ans)