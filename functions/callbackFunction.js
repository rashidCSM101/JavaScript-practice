//? function2 
const myfunc2 = ()=>{ 
    //?function 3 


   const myfunc3 = ()=>{
    return "Hello World" //console.log('Hello world');
    //* function 3 return Hello world
};
//* function 2 return whole function 3
   return myfunc3;

};
//?Function1
const myfunc1 = (callback)=>{  

    let ans = callback();
    return ans;
    
    // callback();
 };
 const ans = myfunc1(myfunc2);
 const result = ans();
 console.log(result);


// ! Function return function
// const myfunc2 = ()=>{ 

// };


// const myfunc1 = ()=>{  
//     const hello = ()=>{ 
//     console.log("hello");
//     };
//    return hello;
//  };

// const ans = myfunc1();
// ans();