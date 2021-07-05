const person = {
    firstName:'Jack',
    lastName:'Sparow',
    age:25,
    location:'Cariban sea',
}
for (let k in person)
{
    console.log(k,' : ',person[k]);
}

console.log('/-------------/');
console.log('First name: ',person.firstName);
console.log('Last name: ',person.lastName);
console.log('Age: ',person.age);
console.log('Where to find: ',person.location);
console.log('/-------------/');

