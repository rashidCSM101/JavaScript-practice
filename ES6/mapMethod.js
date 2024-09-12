// const myMap = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
//     ['four', "four"]
//   ]);
// myMap.set('five',5)
// console.log(myMap);
// console.log(myMap.get(1)); //> Output: one



// for (const [key,value] of myMap) { 
//     console.log(key,value);
// }


// < real stick example

const user1 = {
    id:1,
    name: "John Doe",
    
};
const user2 = {
    id:1,
    name: "John Doe",
    
};

const userMap = new Map();
//--> user1 is a key and {'address':'larkana', 'age': 30} is a value of map()
userMap.set(user1,{'address':'larkana', 'age': 30});
userMap.set(user2,{'address':'sukkar', 'age': 30});
console.log(user1.id);
console.log(userMap.get(user1).address);
console.log(userMap.get(user1).age);
