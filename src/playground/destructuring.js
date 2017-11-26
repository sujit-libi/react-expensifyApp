//
//ES6 object destructuring: 
//

const person = {
    name:'sujit',
    age: 22,
    location:{
        city: 'Bhaktapur',
        temp: 25
    }
}
const {name,age} = person;

console.log(`${name} is ${age}`);
//Without destructuring
if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
//After Destructuring - renaming syntax and default value syntax
const {city,temp:temperature} = person.location;
if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}
//default syntax ko example
const people = {
    ageold: 27,
    location:{
        city: 'kathmandu',
        temp: 88
    }
}

const {fname : firstname = 'Anonymous', ageold} = people;
console.log(`${firstname} is ${ageold}`);


//
//ES6 Array Destructuring
//

const address = ['dhara','Bhaktapur','libali','2'];
console.log(`You are in ${address[2]},${address[1]}`);

//after destructuring

const [,district,place,,hehehe='kathmandy'] = address;
console.log(`You are in ${place},${district},${hehehe}`);

//normal function
const add = (data) => {
    return data.a + data.b;
}

console.log(add({a:1,b:3}));

//destructuring solution:
const add=({a,b})=>{
 return a+b;
}

console.log(add({a:1,b:3}));
