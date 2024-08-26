const array = [44,7,8,9,10,99];
let target = 7;
function numberSearch(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}
const ans = numberSearch(array, target);
console.log(`${array[ans]} is present: ${ans} index`);
