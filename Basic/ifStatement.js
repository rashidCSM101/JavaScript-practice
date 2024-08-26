let age = 19;
let citizen = true;
let registered = false;

// if(age >= 18 && citizen && registered) {
//     console.log("You are eligible for vote");
// }


if(age >= 18) {
    if (citizen) {
        if (registered) {
            console.log("You are eligible for vote");
        }else {
            console.log("You are not eligible due to registration status");
        }
    }else {
        console.log("You are not eligible due to citizenship status");
    }
}else {
        console.log("You are not eligible for vote");
    }































