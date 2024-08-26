const person = {
    name: 'Thapa',
    age: 25,
    city: 'Bangalore',
    hobbies:['crickter','beng','jh']
}
const details=({name,age,city})=>{
    console.log(name);
    console.log(age);
    console.log(city);
}

details(person)