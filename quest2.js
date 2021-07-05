const person = {
    firstName:'Jack',
    lastName:'Sparow',
    age:25,
    location:'Cariban sea',
}
const person2 = {
    firstName:'Jack',
    lastName:'Sparow',
    age:25,
    location:'Cariban sea',
}
const person3 = {
    firstName:'Jack',
    lastName:'Sparos',
    age:26,
    location:'Cariban sea',
}
for (let k in person)
{
    console.log(k,' : ',person[k]);
}
function obCompar(obj1,obj2){
    let a=JSON.stringify(obj1)===JSON.stringify(obj2)
    return a;    
}
console.log('/-------------/');
console.log('First name: ',person.firstName);
console.log('Last name: ',person.lastName);
console.log('Age: ',person.age);
console.log('Where to find: ',person.location);
console.log('/-------------/');
console.log('Сравнение 3x объектов в функции:')
for (let k in person)
{
    console.log(k,' : ',person[k]);
}
console.log('/-------------/');
for (let k in person)
{
    console.log(k,' : ',person2[k]);
}
console.log('/-------------/');
for (let k in person)
{
    console.log(k,' : ',person3[k]);
}

console.log('person and person 2: ', obCompar(person,person2));
console.log('person and person 3: ', obCompar(person,person3));
