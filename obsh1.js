let mas = ['cat', 'dog', 'parrot', 'horse', 'fish', 'chicken', 'lion'];
let mas0=mas.slice('');
let mas1=mas.slice('');
let mas2=mas.slice('');
let mas3=mas.slice('');
let mas01=mas.slice('');
let mas4=mas.slice('');
let mas001=mas.slice('');
let mas5=mas.slice('');
let arra = [31, 10, 'chicken', 9, 'fish', 10];
let mass0 = arra.slice('');
let mass1=[1,2,3,4,5,6,2]
let mass3=[1,3,2,4,5,1,3];
let mass2=[10,15,10,1,0,3,4];


//удаление fish
for (let i=0; i < mas.length; i++ )
{
    if (mas[i]=='fish')
        mas.splice(i,1);
    
}
//удаление cat
for (let i=0; i < mas0.length; i++ )
{
    if (mas0[i]=='cat')
        mas0.splice(i,1);
    
}
//удаление 2х последних
let c=0;
while( c !=2){
    mas1.pop();
    c++;}
//----//    
mas01.length=mas01.length-2;
//-----//
mas001.splice(-2,2);
//удаление первого элемента (cat)
    mas2.shift()

//ещё способы удалить элемент(fish)
let ara=mas3.forEach((mass,index)=>{
    if (mas3[index]=='fish'){
            mas3.splice(index,1);
            }
})
//---------//
let index1=mas4.indexOf('fish',0);
mas4.splice(index1,1);
//----//
let array = mas5.map((el ,index) => {   
    if (el=='fish') {
        mas5.splice(index,1); 
        return el;
    }
    return el; 
})
array.length=array.length-1;

//фильтрация строк//

let filt = arra.filter(a => typeof a=='string');

//фильтрация десяток//

let filt2 = arra.filter(a=> a==10);


// //функции фильтрации

function filterRange(arr,a,b)
{
    return arr.filter(item => a<=item && item<=b);    
}
let a=filterRange(mass1,2,3);

//-------///

function filterInRang(arr,a,b)
{   
 
   
    for(let i=0; i<arr.length;i++){
       
        if (arr[i]<a || arr[i]>b)
        {   
           
            arr.splice(i,1);
           
            i--;
        }

    } 
    return arr;
}

let art=filterInRang(mass3,2,3);


//---------------------//

function ubFilt(arr)
{   
    arr1 = [ ...arr ]; 
    return arr1.sort((a,b)=>a-b);
     
}

let b=ubFilt(mass2);
//-----//
let mass4 = [1, 2, 3, 4, 5];

let result = mass4.reduce((sum, current) => sum + current, 0);
//-------///
function isBiggerThan10(element, index, array) {
    return element > 10;
  }
 some1 = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
 some2 = [12, 5, 8, 1, 4].some(isBiggerThan10); // true
  
//-----------///

function isBigEnough(element, index, array) {
    return element >= 10;
  }
  every1 = [12, 5, 8, 130, 44].every(isBigEnough);   // false
  every2 = [12, 54, 18, 130, 44].every(isBigEnough); // true
  


console.log(1,mas);
console.log(2,mas0);
console.log(3,mas1);   
console.log(4,mas01);
console.log(5,mas001);
console.log(6,mas2);
console.log(7,mas3);
console.log(8,mas4);
console.log(9,mas5);
console.log(10,array);
console.log(11,mass1);
console.log(12,filt);
console.log(13,filt2);
console.log(14,art);
console.log(15,mass3);
console.log(16,'reduse: ',result);
console.log(17, 'some1 and some 2: ',some1,some2);
console.log(18, 'every1 and every 2: ',every1,every2);