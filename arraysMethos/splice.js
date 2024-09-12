// note==> splice(start)
// note==> splice(start, deleteCount)
// note==> splice(start, deleteCount, item1)
// note==> splice(start, deleteCount, item1, item2)
// note==> splice(start, deleteCount, item1, item2, /* …, */ itemN)


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
//> Inserts at index 1
console.log(months);
//imp=>> Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May','Dec');
//> Replaces 1 element at index 4
console.log(months);
// imp=>> Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//del delect value from array

months.splice(2, 1);
console.log(months);