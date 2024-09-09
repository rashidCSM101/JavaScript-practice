const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const res = numbers.filter((num)=>{
//     return num > 4;
// })
// console.log(res);



// same in fireach loop
// const result = [];
// numbers.forEach((num)=> {
//     if (num >4) {
//         result.push(num)
//     }
// }); 
// console.log(result);

const books = [
    { title: "To Kill a Mockingbird", author: "Kristin Hannah", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Kristin Hannah", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985 },
    { title: "The Nightingale", author: "Kristin Hannah", year: 2015 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 }
  ];

  const res = books.filter((bk)=>bk.author==="Kristin Hannah")
  console.log(res);
  