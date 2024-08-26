const animals = ['Dog', 'Cat', 'Horse'];
let [dogVar] = animals;
console.log(dogVar);
let [,catVar,...myNewArray] = animals;
console.log(catVar);
console.log(myNewArray);