let firstNumber = prompt("Enter a 1st number");
let secondNumber = prompt("Enter a 2nd number");
let symbol = prompt("Enter a symbol (+) for Addition \n(-) for subtraction \n(*) for multiplication \n(/) for division ");

// function calculator(num1 ,num2 ,operator) {
//   let result = 0;
//   if(operator === "+") {
//       result = num1 + num2;
//   }
//   else if(operator === "-") {
//       result = num1 - num2;
//   }
//   else if(operator === "*") {
//       result = num1 * num2;
//   }
//   else if(operator === "/") {
//       result = num1 / num2;
//   }
//   else {
//       result = "Enter a Valid Number";
//   }
//   return result;
// }
// using Switch Statment
let calculator =(num1,num2,operator)=>{
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if(num1 === 0){
                result = "please enter a number";
            }
            else {
                result = num1 / num2;
            }
            break;
        default:
            result= "Enter a Valid Number"
    }
    return result;
}
console.log(calculator(firstNumber,secondNumber,symbol))
